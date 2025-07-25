import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const updateUser = async (req, res, next) => {
      if (req.params.id === req.user.id) {
            try {
                  const updatedUser = await User.findByIdAndUpdate(
                        req.params.id,
                        {
                              $set: req.body,
                        },
                        { new: true }
                  );
                  return res.status(200).json(updatedUser);
            } catch (err) {
                  next(err);
            }
      } else {
            return next(createError(403, "You can update only your account!"));
      }
};

export const deleteUser = async (req, res, next) => {
      if (req.params.id === req.user.id) {
            try {
                  await User.findByIdAndDelete(req.params.id);
                  return res.status(200).json("User has been deleted.");
            } catch (err) {
                  next(err);
            }
      } else {
            return next(createError(403, "You can delete only your account!"));
      }
};

export const getUser = async (req, res, next) => {
      try {
            const user = await User.findById(req.params.id);
            const {password,...others} = user._doc;
            return res.status(200).json(others);
      } catch (err) {
            next(err);
      }
};

export const subscribeUser = async (req, res, next) => {
      try {
            await User.findByIdAndUpdate(req.user.id, {
                  $push: { subscribedUsers: req.params.id },
            });
            await User.findByIdAndUpdate(req.params.id, {
                  $inc: { subscribers: 1 },
            });
            return res.status(200).json("Subscription successfull.")
      } catch (err) {
            next(err);
      }
};

export const unsubscribeUser = async (req, res, next) => {
      try {
            try {
                  await User.findByIdAndUpdate(req.user.id, {
                        $pull: { subscribedUsers: req.params.id },
                  });
                  await User.findByIdAndUpdate(req.params.id, {
                        $inc: { subscribers: -1 },
                  });
                  res.status(200).json("Unsubscription successfull.")
            } catch (err) {
                  return next(err);
            }
      } catch (err) {
            next(err);
      }
};

export const likeVideo = async (req, res, next) => {
      const id = req.user.id;
      const videoId = req.params.videoId;
      try {
            await Video.findByIdAndUpdate(videoId, {
                  $addToSet: { likes: id },
                  $pull: { dislikes: id }
            })
            return res.status(200).json("The video has been liked.")
      } catch (err) {
            next(err);
      }
};

export const dislikeVideo = async (req, res, next) => {
      const id = req.user.id;
      const videoId = req.params.videoId;
      try {
            await Video.findByIdAndUpdate(videoId, {
                  $addToSet: { dislikes: id },
                  $pull: { likes: id }
            })
            return res.status(200).json("The video has been disliked.")
      } catch (err) {
            next(err);
      }
};