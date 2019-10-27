/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import Avatar from "antd/es/avatar";
import * as faker from "faker";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import MyIcon from "../MyIcon";
import Badge from "antd/es/badge";

type PanelProp = {
  primary?: string;
  flexDirection?: string;
  padding?: number;
};
const Panel = styled.div<PanelProp>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex: 1;
  padding: ${({ padding = 0 }) => padding};

  width: 100%;
`;

export default function() {
  const theme: any = useTheme();

  return (
    <div
      css={css`
        padding: 30px 30px 0;
        display: flex;
        //background-color: cyan;
      `}
    >
      {/* avatar has no margin*/}
      <Avatar
        size="small"
        src={faker.image.avatar()}
        style={{ marginRight: 10 }}
      />
      <div
        css={css`
          margin-right: auto;
          font-weight: bold;
          font-size: 0.9rem;
        `}
      >
        Hello Matt
      </div>
      <div>
        <Badge dot offset={[-17, 10]}>
          <MyIcon
            css={css`
              background-color: ${theme.colors.secondary};
              padding: 8px;
              font-size: 0.9rem;
              margin-right: 8px;
            `}
            icon="notifications_none"
          />
        </Badge>
        <MyIcon
          css={css`
            background-color: ${theme.colors.secondary};
            padding: 8px;
            font-size: 0.9rem;
          `}
          icon="chat_bubble_outline"
        />
      </div>
    </div>
  );
}
