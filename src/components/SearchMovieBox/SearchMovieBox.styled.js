import { root } from 'jsStyledRoot/styledRoot';
import styled from 'styled-components';
const Form = styled.form`
  display: flex;

  gap: 15px;
  padding: 50px 15px;
  background-color: ${root.mainElementBg};
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 5px 10px;
  height: 35px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: ${root.subTextColor};
  background-color: ${root.subElementBg};
  &:focus {
    outline: 1px solid ${root.orange};
  }
`;
export { Form, Input, Label };
