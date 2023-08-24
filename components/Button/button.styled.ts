import styled from "styled-components";

interface ButtonProps {
  width?: string;
}


export const Wrapper = styled.button<ButtonProps>`
  max-width: 100%;
  background-color: transparent;
  outline: none;
  border: 0;
  display: flex;
  justify-content: center;
  span {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  a {
    text-decoration: none;
  }
  .btn, a {
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: ${({width}) => (width ? width : '250px')};
    cursor: pointer;
  }
  .btn-three, a {
    color: #fff;
    transition: all 0.5s;
    position: relative;
  }
  .btn-three::before, a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(141, 32, 61, 0.3);
    transition: all 0.3s;
  }
  .btn-three:hover::before, a:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  .btn-three::after, a:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
  }
  .btn-three:hover::after, a:hover:after {
    opacity: 1;
    transform: scale(1, 1);
  }
`;
