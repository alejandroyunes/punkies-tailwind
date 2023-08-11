import styled from "styled-components";

export const MobileNav = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    height: 0;
  }
`;
