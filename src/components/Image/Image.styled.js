import styled from 'styled-components';
const Thumb = styled.div`
  margin: 0;
  ${({ size: { width, height } }) => {
    return `width: ${width};
    height: ${height};`;
  }}
`;
export { Thumb };
