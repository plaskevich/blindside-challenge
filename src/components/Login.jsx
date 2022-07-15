import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
`;

const Header = styled.h1`
  color: #fff;
  font-size: 40px;
  margin: 0;
`;
const Subheader = styled.h3`
  color: #fff;
  font-size: 20px;
`;

export default function Login() {
  const login = useGoogleLogin({
    onSuccess: (response) => {
      localStorage.setItem('token', response.access_token);
      window.location.reload(false);
    },
  });

  return (
    <Content>
      <Header>Welcome to the Video App</Header>
      <Subheader>To use the app please login with a google account</Subheader>
      <GoogleButton onClick={() => login()}></GoogleButton>
    </Content>
  );
}
