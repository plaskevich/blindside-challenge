import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export default function VideoPlayer(props) {
  const { video } = props;
  const videoURL = `https://www.dailymotion.com/video/${video.id}`;
  return (
    <Content>
      <ReactPlayer controls url={videoURL} playing width='90%' height='100%' />
      <h2>{video.title}</h2>
    </Content>
  );
}
