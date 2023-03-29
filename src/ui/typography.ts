import { css } from "styled-components";
import { COLOR } from "./color";
import { MEDIA } from "./media";

const H1 = css`
  font-size: 40px;
  font-weight: 600px;
  line-height: 60px;
  color: ${COLOR.GRAPHITE};

  ${MEDIA.$_768} {
    font-size: 32px;
    line-height: 48px;
  }

  ${MEDIA.$_320} {
    font-size: 28px;
    line-height: 42px;
  }
`;

const H2 = css`
  font-size: 24px;
  font-weight: 600px;
  line-height: 36px;
  color: ${COLOR.GRAPHITE};

  ${MEDIA.$_320} {
    font-size: 20px;
    line-height: 36px;
  }
`;

const H3 = css`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600px;
  color: ${COLOR.GRAPHITE};

  ${MEDIA.$_320} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const S1 = css`
  font-size: 18px;
  font-weight: 600px;
  line-height: 24px;
  color: ${COLOR.GRAPHITE};
`;

const S2 = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${COLOR.GRAPHITE};
`;

const S3 = css`
  font-size: 16px;
  font-weight: 600px;
  line-height: 24px;
  color: ${COLOR.GRAPHITE};
`;

const B1 = css`
  font-size: 16px;
  font-weight: 400px;
  line-height: 24px;
  color: ${COLOR.GRAPHITE};
`;

export const Typography = { H1, H2, H3, S1, S2, S3, B1 };
