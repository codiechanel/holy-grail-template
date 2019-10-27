/** @jsx jsx */

import * as React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { Button as rbButton } from "react-bootstrap";
import Progress from "antd/es/progress";
import { useTheme } from "emotion-theming";

const Button = styled(rbButton)`
  margin-bottom: 15px;
  //background-color: darkcyan;
  background-color: ${(props: any) => props.theme.colors.accent1};
`;
type PanelProp = {
  primary?: string;
  flexDirection: string;
  padding?: number;
};

type TitleProp = {
  theme?: any;
};
const Title = styled.div<TitleProp>`
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 0.8rem;
`;
type ProgressTitleProp = {
  theme?: any;
};
const ProgressTitle = styled.div<ProgressTitleProp>`
  //color: ${props => props.theme.colors.accent2};
  font-weight: bold;
  font-size: 1.3rem;
`;
type SubTitleProp = {
  theme?: any;
};
const SubTitle = styled.span<SubTitleProp>`
//display: inline-block;
  // color: ${props => props.theme.colors.accent2};
  font-weight: bold;
  font-size: .8rem;
`;
export default function() {
  const theme: any = useTheme();
  return (
    <div
      css={css`
        padding: 30px;
        display: flex;
        flex-direction: column;
      `}
    >
      <Title
        css={css`
            color: #4f5573;
          `}
      >
        My current rank
      </Title>
      <ProgressTitle>Running Master</ProgressTitle>
      <div>
        <Progress percent={65} />
      </div>

      <div
        css={css`
          //background-color: brown;
        `}
      >
        <SubTitle>Next lvl </SubTitle>
        <SubTitle
          css={css`
            color: ${theme.colors.accent3};
          `}
        >
          Elite
        </SubTitle>
        <div
          css={css`
            float: right;
          `}
        >
          <SubTitle
            css={css`
              color: ${theme.colors.accent3};
            `}
          >
            1320
          </SubTitle>
          <SubTitle>/1500</SubTitle>
        </div>
      </div>

      <div
        css={css`
          //top (left-right) bottom
          padding: 15px 15px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        <Button>Achievements</Button>
        <Button
          css={css`
            background-color: ${theme.colors.secondary};
            border-color: ${theme.colors.secondary};
          `}
        >
          Leaderboard
        </Button>
      </div>
    </div>
  );
}
