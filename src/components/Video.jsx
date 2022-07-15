import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import RelatedVideos from './RelatedVideos';
import Comments from './Comments';
import { CaretLeft } from '@carbon/icons-react';

const Content = styled.div`
  margin: 0 auto;
  padding: 50px;
  display: flex;
  max-width: 1400px;
`;

const RightSection = styled.div`
  width: 30%;
`;
const LeftSection = styled.div`
  width: 70%;
  height: 600px;
`;

const Home = styled.div`
  margin-bottom: 32px;
  & a {
    display: flex;
    align-items: center;
    color: #6ba6ff;
    text-decoration: none;
    transition: 0.3s all ease;
    width: fit-content;
    &:hover {
      color: #2076f7;
    }
  }
`;

export default function Video() {
  const { videoID } = useParams();
  const [video, setVideo] = useState();

  const getVideo = () => {
    axios({
      method: 'get',
      url: `https://api.dailymotion.com/video/${videoID}`,
    }).then(function (response) {
      setVideo(response.data);
    });
  };

  useEffect(() => {
    getVideo();
  }, [videoID]);

  return (
    <Content>
      <LeftSection>
        <Home>
          <Link to='/'>
            <CaretLeft />
            Back to all videos
          </Link>
        </Home>
        {video && <VideoPlayer video={video} />}
        <Comments />
      </LeftSection>
      <RightSection>
        {video && <RelatedVideos videoID={video.id} />}
      </RightSection>
    </Content>
  );
}
