import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  margin: 0 auto;
  padding: 32px 24px;

  p {
    text-align: center;
    margin: 0 auto;
    font-size: 1.2rem;
    color:  ${({ theme }) => theme.textColor};
    padding-top: 12px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
  }
`;
