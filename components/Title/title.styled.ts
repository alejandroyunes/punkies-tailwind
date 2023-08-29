import styled from "styled-components"

export const TitleContainer = styled.div`
  background: ${({ theme }) => theme.bodyColor};
  max-width: ${({ theme }) => theme.breakpoint.md};
  padding: 28px 0 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 16px 0 16px;
  }
  h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    letter-spacing: 4px;
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.primary};
  }  
  h2 {
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
