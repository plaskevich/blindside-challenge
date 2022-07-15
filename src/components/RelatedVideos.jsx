import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import VideoCard from './VideoCard';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Videos = styled.div`
  max-height: 86vh;
  overflow: scroll;
`;

const Header = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
`;

export default function RelatedVideos(props) {
  const { videoID } = props;

  const [relatedVideos, setRelatedVideos] = useState();

  const getRelatedVideos = () => {
    axios({
      method: 'get',
      url: `https://api.dailymotion.com/video/${videoID}/related`,
    }).then(function (response) {
      setRelatedVideos(response.data.list);
    });
  };

  useEffect(() => {
    getRelatedVideos();
  }, [videoID]);

  return (
    <Content>
      <Header>Related Videos</Header>
      <Videos>
        {relatedVideos?.map((v) => {
          return (
            <Link to={`/video/${v.id}`} style={{ textDecoration: 'none' }}>
              <VideoCard video={v} />
            </Link>
          );
        })}
      </Videos>
    </Content>
  );
}
