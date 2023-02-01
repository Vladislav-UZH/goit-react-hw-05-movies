import styled from 'styled-components';

const ThumbGif = styled.div`
  margin: 20px auto 0 auto;
  max-width: 800px;
  height: 450px;
  /* /* height: 600px; */
  background: no-repeat cover;
  background-image: url('not-found-tumbleweed.gif');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const MessageError = styled.h1`
  color: #e2580a;
  text-align: center;
`;

export { ThumbGif, MessageError };
