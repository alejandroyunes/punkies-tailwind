import styled from "styled-components";

export const BodyWrapper = styled.section`
  background-color: ${({ theme }) => theme.bodyColor};
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: auto;
  }
`;

export const ButtonsWrapper = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  margin: 24px auto 0;
  max-width: ${({ theme }) => theme.breakpoint.md};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 8px;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 50px;
  margin: 0 16px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.textColor};
  background: rgba(97, 29, 29, 0.3);
  border: none;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 150px;
    height: 40px;
  }
`;

export const ItemWrap = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  padding: 16px 0 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: none;
    background: red;
  }
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  img {
    height: 332px;
    width: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    img {
      height: 360px;
      width: auto;
    }
  }
`;

export const ItemImg = styled.div`
  padding: 0 16px;
  cursor: pointer;

`;

export const ItemWrapMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: flex;
    height: 480px;
    justify-content: center;
    margin: 0 auto;
    padding: 24px 24px 0;
  }
`;


export const ItemDescription = styled.div`
  margin-top: 2.5px;
  padding: 2.5px 16px;
  h3 {
    color: ${({ theme }) => theme.textColor};
  }
  span {
    color: ${({ theme }) => theme.textColor};
  }
`;
export const WhatApp = styled.section`
  position: absolute;
  width: 56px;
  right: 24px;
  z-index: 100;
  cursor: pointer;

`;

// ***** --- MOBILE --- *****
