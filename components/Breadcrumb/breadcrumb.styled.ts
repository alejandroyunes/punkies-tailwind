import styled from "styled-components";

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  #gp-discography {
    scroll-margin: 2000px;
    scroll-behavior: smooth;
  }
`;

export const RedLineDesktop = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid  ${({ theme }) => theme.textColor};
  background-color: #3B1414;
  height: 48px;
  z-index: ${({ theme }) => theme.zIndices.base};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.breakpoint.md};
  margin: -57px auto 0;
  padding: 0 72px 0 24px;
  z-index: ${({ theme }) => theme.zIndices.docked};
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  height: 60px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 24px 0;
    width: 100%;
  }
`;

export const GoBackWrapper = styled.div`
  display: flex;
  z-index: ${({ theme }) => theme.zIndices.docked};
  cursor: pointer;
`;

export const Title = styled.div`
  margin-top: 0px;
  z-index: ${({ theme }) => theme.zIndices.docked};
  scroll-behavior: smooth;
  h1 {
    padding: 24px 48px 0 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 20px;
    text-align: left;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    h1 {
      padding: 22px 0 0 0;
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
`;

export const ArrowContent = styled.div`
  margin: 22px 0 0 0;
  transform: rotate(275deg);
  width: 20px;
  height: 20px;
  z-index: ${({ theme }) => theme.zIndices.docked};
`;

export const GoBack = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 21px 0 0 8px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.palette.common.white};
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 22px 0 0 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin: 19px 0 0 8px;
  }
`;
