import styled from "styled-components";

export const Wrapper = styled.section`
padding-top: 48px;
  margin: 0 auto;
  }
`;

export const InnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 24px;
  }
`;

export const BandMember = styled.div`
  outline: 1px solid white;
  margin: 0 auto 24px;
`;

export const Img = styled.div`
  max-width: 360px;
  outline: 1px solid white;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    max-width: 300px;
  }
`;

export const Text = styled.div`
 text-align:center;
 padding: 4px 0;
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.secondary};

`;
