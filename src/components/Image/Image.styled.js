import styled from 'styled-components';
const Thumb = styled.div`
  margin: 0;
  /* width: 100%; */
  ${({ size: { width, height } }) => {
    return `
    min-width: ${width}px;
    width: ${width}px;
    height: ${height}px;`;
  }}
`;
export { Thumb };
