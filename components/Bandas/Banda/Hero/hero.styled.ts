import styled from "styled-components";

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
`;

export const BandWrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 32px;
  }
`;

export const BandDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.textColor};
  text-align: left;
  padding: 0 48px;
  font-weight: 300;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 24px;
  }
  svg {
    margin: 2px 0 0 8px;
    height: 24px;
  }
  svg, span:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.bodyColor};
  }
`;

export const ReadMore = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.textColor};
  text-decoration: underline;
  cursor: pointer;
`;

export const ImageDiv = styled.div`
  img {
    width: 100%;
    padding: 0 48px 0 0;
    max-width: 100%;
    max-height: 320px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    max-width: 100%;
    max-height: 280px;
    img {
      padding: 24px 24px 8px;
    }
  }
`;

export const ReadMoreDisco = styled.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    text-align: right;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.textColor};
    padding: 0 48px 0 0;
  }
  h3:hover {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    h3 {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
      text-align: left;
      padding: 0 24px;
    }
  }
`;

export const TitleMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.titleMobile};
    flex-basis: 100%;
    margin: -57px auto 0;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.textColor};
    padding: 15px 24px 0;
    width: 424px;
    z-index: ${({ theme }) => theme.zIndices.docked};
  }
`;
