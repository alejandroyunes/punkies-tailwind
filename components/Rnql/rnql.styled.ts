import styled from "styled-components";

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  width: 100%;
`;
export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 24px auto 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 40px;
    grid-template-columns: repeat(1, 1fr);
  }

  h1 {
    color: white;
    font-size: 36px;
  }
`;

export const WrapperChild = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-top: 24px;
  }
  svg {
    position: absolute;
    width: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${({ theme }) => theme.palette.primary.main};
  }
  svg:hover {
    fill: ${({ theme }) => theme.palette.common.white};
  }
`;
