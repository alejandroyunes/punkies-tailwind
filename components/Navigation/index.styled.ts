import styled from "styled-components";

interface NavProps {
  highlighted: boolean;
}

export const LinksContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 130px;
  width: ${({ theme }) => theme.breakpoint.md};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const LinksWrapper = styled.div`
  width: ${({ theme }) => theme.breakpoint.md};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 0 auto;
`;

export const Menu = styled.div`
  z-index: ${({ theme }) => theme.zIndices.docked};
  display: flex;
  align-items: center;
  z-index: 3000;
  ul {
    display: flex;
    align-items: center;
    height: 48px;
  }
  li {
    display: inline-flex;
    padding: 0 12px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    span {
      display: flex;
      padding: 0 4px;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.lighterRed};
    }
    .active {
      color: ${({ theme }) => theme.colors.lighterRed};
    }
  }
  .dropdown {
    position: relative;
  }
  ul li ul {
    visibility: hidden;
    background: ${({ theme }) => theme.colors.dropdown};
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
    color: ${({ theme }) => theme.colors.white};
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
    background-color: ${({ theme }) => theme.colors.primary};
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
