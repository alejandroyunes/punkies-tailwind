import styled from "styled-components";

export const LinksWrapper = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.common.black};
  width: 100%;
`;

export const LinksContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 100px;
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
    li:hover {
      color: #8D203D;
    }
    .active {
      color: #8D203D;
    }
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

export const ArrowContent = styled.div`
  align-items: center;
  margin: 0 auto;
  padding-left: 4px;
  svg {
    margin: 8px 0 0 0;
    transform: rotate(180deg);
    width: 14px;
    height: 14px;
    z-index: ${({ theme }) => theme.zIndices.docked};
  }
`;

export const ImageMain = styled.div`
  z-index: ${({ theme }) => theme.zIndices.docked};
  display: flex;
  cursor: pointer;
`;

export const ImagePadding = styled.div`
  padding: 14px 0 0;
  width: 260px;
  height: 94px;
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
///**  Mobile Menu
//In case mobile dropdown needs a color height.

export const MobileNav = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* position: fixed; */
    background-color: ${({ theme }) => theme.bodyColor};
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
