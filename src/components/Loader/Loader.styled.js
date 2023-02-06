import styled from 'styled-components';
const Backdrop = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(7, 13, 42, 0.91); */
  background-color: #32343b;
  display: flex;

  align-items: center;
  justify-content: center;
`;
export { Backdrop };
