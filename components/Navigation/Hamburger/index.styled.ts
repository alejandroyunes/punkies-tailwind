import styled from "styled-components";

export const HamburgerMenu = styled.div`
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: ${({ theme }) => theme.zIndices?.dropdown};
`;

export const Menu = styled.div`
  position: absolute;
  top: 23px;
  right: 0px;
  z-index: ${({ theme }) => theme.zIndices?.dropdown};
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
    background: ${({ theme }) => theme.colors?.secondary};
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
    background: ${({ theme }) => theme.colors?.secondary};
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
  color: ${({ theme }) => theme.colors?.secondary};
  width: 200px;
  padding: 30px;
  background: ${({ theme }) => theme.colors?.dropdown};
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
    padding: 10px 0;
    font-size: 22px;
    font-family: ${({ theme }) => theme.fonts?.primary};
    cursor: pointer;
  }
  li:hover {
    color: ${({ theme }) => theme.colors?.tertiary};
  }

  .dropdown {
    position: relative;

    .media {
      position: relative;
      svg {
        vertical-align: text-top;
        fill: #fff;
        margin-left: 8px;
      }
      /* svg:hover {
      
    } */
    a + svg:hover {
      color: ${({ theme }) => theme.colors?.tertiary};
      fill: ${({ theme }) => theme.colors?.tertiary};
    }
    }
    .media-links {
      visibility: hidden;
      position: absolute;
      opacity: 0;
      right: 138px;
      width: 120px;
      text-align: center;
      background: ${({ theme }) => theme.colors?.dropdown};
      transition: all 0.2s ease;
      top: 0;
      ul li {
        color: ${({ theme }) => theme.colors?.secondary};
      }
      ul li:hover {
        color: ${({ theme }) => theme.colors?.tertiary};
      }
    }
    .media:hover + .media-links,
    .media-links:hover {
      visibility: visible;
      opacity: 1;
    }
  }
  .dropdpown:hover {
  }
`;


