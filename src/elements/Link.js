import styled, { css } from "styled-components";

export default styled.a`
  font-size: 14px;
  border: 2px solid;
  border-radius: 5px;
  margin:5px;
  padding: 7px 15px;
  ${(props) =>
    props.border &&
    css`
      border-color: ${(props) => props.border};
    `}
  color:white;
`;
