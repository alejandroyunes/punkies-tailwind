import styled from "styled-components";

export const RedLineDesktop = styled.div`
  outline: 1px solid ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.common.black};
  height: 48px;
  opacity: 0.3;
  z-index: ${({ theme }) => theme.zIndices.base};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const TitleTextDesktop = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
  margin: -48px auto 0;
  z-index: ${({ theme }) => theme.zIndices.docked};
  background-color: ${({ theme }) => theme.palette.common.black};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  flex-basis: 100%;
  text-align: center;
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.common.white};
  padding: 0 48px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-basis: 0;
  }
`;

// ***** --- MOBILE --- *****
export const ImageDiscoWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    width: 100%;
  }
`;
export const ImageDiv = styled.div`
  text-align: center;
  img {
    max-width: 424px;
    padding: 24px 48px 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    img {
      padding: 24px 24px 16px;
    }
  }
`;
export const BreadcrumbWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  display: block;
  img {
    max-width: 424px;
  }
`;
export const BandDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto;
  }
`;
export const BandDescription = styled.h2`
  padding-top: 8px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.textColor};
  text-align: left;
  padding: 0 48px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto;
    padding: 0 24px;
  }
`;
export const BandReadMoreButton = styled.div`
  margin: 16px auto 0;
  display: flex;
  padding-top: 24px;
  max-width: 376px;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  z-index: ${({ theme }) => theme.zIndices.docked};
`;

export const BandReadMore = styled.p`
  margin: 0 24px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.palette.common.white};
  padding: 4px 48px;
  max-width: 330px;
  outline: 1px solid ${({ theme }) => theme.palette.common.white};
`;
