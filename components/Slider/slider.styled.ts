import styled from "styled-components"

export const SliderContainer = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoint.md};
  height: 400px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const SliderContainerMobile = styled.section`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;