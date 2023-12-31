import styled from "styled-components";

export const HamburgerMenu = styled.div`
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: ${({ theme }) => theme.zIndices.dropdown};
`;

export const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 72px 0 0;
  -webkit-tap-highlight-color: transparent;
  svg {
    height: 20px;
    width: 20px;
    color: white;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 16px;
  right: 0px;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  -webkit-user-select: none;
  user-select: none;
  input {
    display: block;
    width: 44px;
    height: 36px;
    position: absolute;
    top: -7px;
    right: 14px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }
  span {
    display: block;
    width: 36px;
    height: 4px;
    right: 20px;
    margin-bottom: 5px;
    position: relative;
    background: ${({ theme }) => theme.palette.common.white};
    border-radius: 2px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(4px, -6px);
    background: ${({ theme }) => theme.palette.common.white};
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(4px, 7px);
  }
  input:checked ~ ul {
    transform: none;
  }
`;

export const Links = styled.ul`
  width: 200px;
  padding: 30px;
  background: ${({ theme }) => theme.palette.common.black};
  position: absolute;
  right: 0;
  top: -40px;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform-origin: 10px;
  transform: translate(0, -100%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    color: ${({ theme }) => theme.palette.common.white};
    padding: 10px 0;
    font-size: 16px;
    cursor: pointer;
  }
  li:hover {
    color: ${({ theme }) => theme.palette.common.white};
  }
  a {
    text-decoration: none;
  }
`;
