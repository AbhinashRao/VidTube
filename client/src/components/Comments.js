import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import axios from "axios";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({ userId: currentUser?._id, videoId, desc: "" });

  console.log(currentUser);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/comments/${videoId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [videoId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      await axios.post('/comments', comment);
      const response = await axios.get(`/comments/${videoId}`);
      setComments(response.data);
      setComment({ videoId, desc: "" });
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <NewComment as="form" onSubmit={handleSubmit}>
        <Avatar 
        src={currentUser?.img} 
        alt={currentUser?.name}/>
        <Input placeholder="Add a comment..." onChange={handleChange} name="desc" />
      </NewComment>
      {comments.map(comment => (
        <Comment key={comment._id} {...comment} />
      ))}
    </Container>
  );
};

export default Comments;
