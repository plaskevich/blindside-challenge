import React, { useState } from 'react';
import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const Content = styled.div`
  margin-top: 10px;
  color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h2``;

const CommentsSection = styled.div`
  height: 300px;
`;

const CommentInput = styled.textarea`
  resize: none;
  background-color: #141415;
  font-family: 'Albert Sans', sans-serif;
  font-size: 15px;
  width: 88%;
  outline: none;
  border-radius: 10px;
  border: none;
  padding: 15px;
  color: #fff;
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #2076f7;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    background-color: #164ea1;
  }
`;

const Comment = styled.div`
  background-color: #141415;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
  width: fit-content;
`;

const ToggleSwitch = styledMUI((props: SwitchProps) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#6BA6FF',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function Comments() {
  const [showComments, setShowComments] = useState(true);
  const [newComment, setNewComment] = useState();
  const [comments, setComments] = useState([]);

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <Content>
      <Header>
        <Title>Comments</Title>
        <ToggleSwitch
          checked={showComments}
          onChange={() => setShowComments(!showComments)}
        />
      </Header>
      {showComments && (
        <CommentsSection>
          {comments.length > 0 &&
            comments.map((c) => {
              return <Comment>{c}</Comment>;
            })}
          <CommentInput
            placeholder='Write a comment...'
            rows='3'
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
          <Button onClick={() => addComment()}>Comment</Button>
        </CommentsSection>
      )}
    </Content>
  );
}
