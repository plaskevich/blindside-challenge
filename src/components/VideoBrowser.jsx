import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const Content = styled.div`
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  gap: 15px;
`;

const VideoCard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  &:hover {
    background-color: #141415;
  }
`;

const Title = styled.h4`
  color: #fff;
  width: 280px;
  font-weight: 400;
`;

const SignOut = styled.div`
  color: #6ba6ff;
  width: 100%;
  text-align: right;
  font-weight: 600;

  & span {
    transition: 0.3s all ease;
    cursor: pointer;
    &:hover {
      color: #2076f7;
    }
  }
`;

export default function VideoBrowser() {
  const [videos, setVideos] = useState();

  const logout = () => {
    localStorage.setItem('token', '');
    window.location.reload(false);
  };

  const getVideos = () => {
    axios({
      method: 'get',
      url: 'https://api.dailymotion.com/videos?limit=32',
    }).then(function (response) {
      setVideos(response.data.list);
    });
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Content>
      <SignOut>
        <span onClick={() => logout()}>SIGN OUT</span>
      </SignOut>
      {videos?.map((v) => {
        const videoURL = `https://www.dailymotion.com/video/${v.id}`;
        return (
          <VideoCard key={v.id} to={`/video/${v.id}`}>
            <ReactPlayer light url={videoURL} height='160px' width='280px' />
            <Title>{v.title}</Title>
          </VideoCard>
        );
      })}
    </Content>
  );
}
