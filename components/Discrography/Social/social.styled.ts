import styled from "styled-components";

export const SocialWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 16px auto 0;
  display: flex;
  /* height: 40px; */
  align-items: center;
  padding: 0 24px 0 24px;
  justify-content: space-between;
  .amazon {
    svg {
      width: 44px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .spotify {
    svg {
      width: 40px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .youtube {
    svg {
      width: 44px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .sound {
    svg {
      width: 56px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .download {
    svg {
      width: 36px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 24px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    -webkit-tap-highlight-color: transparent;
    padding: 0 0 0 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
  justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
  justify-content: left;
  }
`;

export const TextWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
  display: flex;
  justify-content: center;
  }
`;

export const SocialText = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding-top: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding-right: 8px;
  }
`;
export const SocialItems = styled.div`
  padding: 0 8px;
  cursor: pointer;
  svg {
  fill: ${({ theme }) => theme.palette.primary.main};
  }
    svg:hover {
    fill: ${({ theme }) => theme.textColor};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0 4px;
  }
`;
