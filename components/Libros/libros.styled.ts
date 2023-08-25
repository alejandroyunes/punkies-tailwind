import styled from "styled-components";

export const ItemWrap = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  margin: 24px auto 0;
  padding: 0 24px;
  max-width: ${({ theme }) => theme.breakpoint.md};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;  
`;

export const ItemWrapMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: block;
    padding: 24px 24px 0;
    text-align: center;
    max-width: ${({ theme }) => theme.breakpoint.xs};
  }
`;

export const ItemCard = styled.div`

`;

export const ItemImg = styled.div`
  padding: 24px 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ItemDescription = styled.div`
  margin-top: 2.5px;
  padding: 3.5px 16px;
  display: flex;
  justify-content: center;
  h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.palette.common.white};
  }
  span {
    color: ${({ theme }) => theme.textColor};
  }
`;
