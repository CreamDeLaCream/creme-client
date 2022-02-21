import { css } from 'styled-components';

export const logo = css`
  font-size: 1.8rem;
  font-weight: 600;
  ${({ theme }) => theme.device.mobile} {
    /* margin: 0 3rem 0 3rem; */
  }
`;

export const menu = css`
  line-height: 2.2rem;
`;

export const mainTitle = css`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const subTitle = css`
  font-size: 1.3rem;
  font-weight: 400;
`;

export const body = css`
  font-size: 1rem;
  line-height: 2rem;
`;

export const desc = css`
  font-size: 0.9rem;
  /* line-height: 1rem; */
`;

export const button = css`
  font-size: 1rem;
`;
