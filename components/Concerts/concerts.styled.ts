import styled from "styled-components";

export const DesktopWrapper = styled.div`
padding-bottom: 32px;
background: ${({ theme }) => theme.bodyColor};
max-width: ${({ theme }) => theme.breakpoint.md};
margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  display: inline-flex;
  margin: 0 auto;
  border-bottom: 2px solid  ${({ theme }) => theme.textColor};
`;

export const ColumnData = styled.div`
  display: grid;
  outline: 1px solid red;
  grid-template-columns: repeat(auto, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Date = styled.div`
  width: 160px;
`;
export const Evento = styled.div`
  width: 350px;
`;

export const Lugar = styled.div`
  width: 400px;
`;
export const Precio = styled.div`
  width: 100px;
`;
export const TitleYear = styled.div`
  width: 180px;
`;

export const Title = styled.div`
  padding: 8px 0;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  p {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    background-color: ${({ theme }) => theme.bodyColor};
    display: block;
    max-width: ${({ theme }) => theme.breakpoint.md};
    margin: 0 auto;
    padding: 8px 0 24px;
    border-bottom: 2px solid ${({ theme }) => theme.textColor};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    max-width: ${({ theme }) => theme.breakpoint.xs};
    padding: 8px 0;
  }
`;

export const DateMobileWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: flex;
  justify-content: flex-start;
`;

export const TitleDateMobile = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.fonts.secondary};
  width: 80px;
  display: flex;
  padding: 8px 24px;
`;

export const DateMobile = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: flex;
  padding: 8px 24px;
`;
