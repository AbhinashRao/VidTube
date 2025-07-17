import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = (comment) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(`/users/find/${comment.userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [comment.userId]);
  console.log(user);

  return (
    <Container>
      <Avatar
        alt={user?.name}
        src={user?.img}
      />
      <Details>
        <Name>
          {user?.name} <Date> {moment(comment?.createdAt)?.fromNow()}</Date>
        </Name>
        <Text>
          {comment?.desc}
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
