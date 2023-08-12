import styled from "styled-components";

export const DesktopWrapper = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.common.black};
  width: 100%;
`;

export const LinksContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 84px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const Menu = styled.div`
  z-index: ${({ theme }) => theme.zIndices.docked};
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0;
    span {
      cursor: pointer;
    }
    svg {
      height: 20px;
      width: 20px;
      color: white;
    }
  }
  li {
    display: inline-flex;
    padding: 0 12px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    span {
      display: flex;
      padding: 0 4px;
    }
  }
  li:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  .active {
    font-weight: 600;
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  .dropdown {
    position: relative;
  }
  ul li ul {
    visibility: hidden;
    background: #161616;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    height: 100px;
    top: 24px;
    padding-top: 8px;
    left: 0;
    display: none;
  }
  ul li ul li {
    margin: 8px 0;
  }

  ul li:hover > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const ImageMain = styled.div`
  z-index: ${({ theme }) => theme.zIndices.docked};
  display: flex;
  cursor: pointer;
  img {
    padding: 8px 0 0;
  }
`;

export const ImagePaddingMobile = styled.div`
  padding-left: 24px;
  height: 60px;
  display: flex;
  align-items: center;
  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.textColor};
    font-size: 26px;
  }
`;

export const MobileNav = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.common.black};
    z-index: ${({ theme }) => theme.zIndices.sticky};
  }
`;

export const MobileLogo = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
    padding: 5px 0 0 4px;
    -webkit-tap-highlight-color: transparent;
  }
`;
