import styled, { css } from "styled-components";

export default styled.select`
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 8px 54px;
  ${(props) =>
    props.background &&
    css`
      background: ${(props) => props.background};
    `}
  color:white;
  &:hover {
    text-decoration: underline;
  }
`;
