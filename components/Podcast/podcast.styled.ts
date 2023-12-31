import styled from "styled-components";


export const PodcastContainer = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 24px auto 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 0 40px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WrapperChild = styled.div`
  position: relative;
  display: flex;

  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding-top: 24px;
    justify-content: center;
  }
  &:first-child {
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  h1 {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
  h3 {
    padding-top: 4px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  p {
    padding: 24px 24px 24px 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    div {
      margin: 8px 0;
    }
  }
`;
