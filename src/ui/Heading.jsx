import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow;"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `
    font-size: 20px;
  font-weight: 600;`}
  ${(props) =>
    props.as === "h2" &&
    `
    font-size: 30px;
  font-weight: 600;`}
 ${(props) =>
    props.as === "h3" &&
    `
    font-size: 34px;
  font-weight: 600;`}



  line-height: 1.5;
`;

export default Heading;
