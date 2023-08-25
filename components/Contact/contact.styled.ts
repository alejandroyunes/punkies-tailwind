import styled from "styled-components";

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  width: 100%;
`;
export const WrapperSocial = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 24px auto 16px;
  padding: 0 96px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 40px;
  }

  h1 {
    color: white;
    font-size: 36px;
  }
`;

export const WrapperChild = styled.div`
  flex-basis: 56px;
  margin-right: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-basis: 40px;
  }
  svg {
    fill: white;
    &:hover {
      fill: ${({ theme }) => theme.palette.primary.main};
      cursor: pointer;
    }
  }
`;

export const ContactWrapper = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.md};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContactItem = styled.section`
  padding: 0 96px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 48px;
  }
  h1 {
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 24px;
  }
  h2 {
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 26px;
    padding-top: 24px;
    line-height: 34px;
  }
  h1:not(:first-child) {
    padding-top: 16px;
  }
  p {
    color: ${({ theme }) => theme.textColor};
    padding-top: 8px;
  }
 div {
  cursor: pointer;
  display: flex;
  max-width: 200px;
  margin: 24px auto 16px;
}
`;

export const ContactImages = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 16px 0;
  }
  h2 {
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 24px;
  }
`;

export const Image = styled.section`
  padding: 0 16px 16px;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0 8px 8px;
  }
`;
