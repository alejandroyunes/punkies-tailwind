import styled from "styled-components";

export const DesktopWrapper = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.common.black};
  width: 100%;
`;

export const Links = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 84px;
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
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
      svg {
        height: 20px;
        width: 20px;
        color: ${({ theme }) => theme.palette.common.white};
      }
    }
  }
  li {
    display: inline-flex;
    padding: 0 12px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.primary}
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
`;

export const ImageMain = styled.div`
  z-index: ${({ theme }) => theme.zIndices.docked};
  cursor: pointer;
  img {
    padding: 4px 0 0;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.common.black};
    -webkit-tap-highlight-color: transparent;
    a {
      text-decoration: none;
    }
  }
`;

export const ImagePaddingMobile = styled.div`
  padding-left: 24px;
  height: 52px;
  display: flex;
  align-items: center;
  h1 {
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 24px;
  }
`;
