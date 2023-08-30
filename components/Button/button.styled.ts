import styled from "styled-components";

interface ButtonProps {
  width?: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
max-width: 100%;
background-color: transparent;
outline: none;
border: 0;
display: flex;
justify-content: center;
span {
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColor};
  background: transparent;
}
a {
  text-decoration: none;
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: ${({width}) => (width ? width : '250px')};
  cursor: pointer;
  background-color: rgba(141, 32, 61, 0.3);
  color:  ${({ theme }) => theme.textColor};
  transition: all 0.5s;
  position: relative;
}
a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
a:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
a:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid  ${({ theme }) => theme.textColor};
  transform: scale(1.2, 1.2);
}
a:hover:after {
  opacity: 1;
  transform: scale(1, 1);
}
`;
