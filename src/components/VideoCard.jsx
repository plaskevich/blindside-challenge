import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Card = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  &:hover {
    background-color: #141415;
  }
  cursor: pointer;
`;

const Title = styled.div`
  color: #fff;
  width: 250px;
`;

export default function VideoCard(props) {
  const { video } = props;
  const videoURL = `https://www.dailymotion.com/video/${video.id}`;
  return (
    <Card>
      <ReactPlayer
        url={videoURL}
        width='160px'
        height='90px'
        light
        playIcon
        style={{ pointerEvents: 'none' }}
      />
      <Title>{props.video.title}</Title>
    </Card>
  );
}
