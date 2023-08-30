import styled from "styled-components"

export const TitleContainer = styled.div`
  background: ${({ theme }) => theme.bodyColor};
  max-width: ${({ theme }) => theme.breakpoint.md};
  padding: 16px 0 16px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 16px 0 8px;
  }
  h2 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.title};
    letter-spacing: 4px;
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.primary};
  }  
  h3 {
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textColor};
    padding-bottom: 24px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
  }
`;
