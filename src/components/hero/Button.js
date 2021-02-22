import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  transition: all 0.4s ease-in-out;
  color: #fff;
  font-size: ${({ large }) => (large ? "1.25rem" : "1rem")};
  padding: ${({ primary }) => (primary ? "10px 20px" : "5px 10px")};
  background: ${({ primary }) => (primary ? "#01c5c4" : "#d94af5")};
  .fas {
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    transition: all 0.4s ease-in-out;
  }
`;
