import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const FullWrapper = styled.div`
  padding-top: 0px;
  background-color: ${({ theme }) => theme.bodyColor};
  width: 100%;
  /* @media(max-width: ${({theme}) => theme.breakpoint.md}){
    padding-top: 60px;
  } */
`;

export const GpPadding = styled.div`
  padding-top: 24px;
`;
