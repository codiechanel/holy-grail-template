/** @jsx jsx */
import * as React from "react";
import ui from "../../common/UI";
import * as faker from "faker";
import List from "antd/es/list";
import Avatar from "antd/es/avatar";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import MyIcon from "../MyIcon";
import { useTheme } from "emotion-theming";
type PanelProp = {
  primary?: string;
  flexDirection: string;
  padding?: number;
  theme?: any;
};
const Panel = styled.div<PanelProp>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  padding: ${({ padding = 0 }) => padding};
`;
const MyList = styled(List)`
  overflow: auto;
  a,
  .ant-list-item-meta-description {
    color: white;
  }
  .ant-list-item {
    border-bottom-color: transparent;
    border-bottom-width: 0;
  }
`;

export default function() {
  const theme: any = useTheme();

  const cardList = new Array(10)
    .fill(null)
    .map(e => (e = faker.helpers.userCard()));

  return (
    /* padding has no effect here */

    <Panel flexDirection="column">
      <div
        css={css`
          padding: 30px 30px 0;

          margin: 0;
        `}
      >
        <div
          css={css`
            //padding: 0 30px;
            display: inline-block;
            margin: 0;
          `}
        >
          <b>Friends Activity</b>
        </div>
        <MyIcon
          css={css`
            background-color: ${theme.colors.secondary};
            padding: 8px;
            float: right;
            //display: inline-block;
            font-size: 0.9rem;
          `}
          icon="search"
        />
      </div>

      <MyList
        css={css`
          padding: 0 30px;
          margin: 0;
        `}
        // loadMore={"load more"}
        itemLayout="horizontal"
        dataSource={cardList}
        renderItem={item => {
          let item2: any = item;
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={faker.image.avatar()} />}
                title={<a href="https://ant.design">{item2.name}</a>}
                description={item2.company.name}
              />
              <MyIcon
                css={css`
                  //color: ${theme.colors.secondary};
                  color: #4f5573;
                  font-size: 0.9rem;
               `}
                icon="more_vert"
              />
            </List.Item>
          );
        }}
      />
    </Panel>
  );
}
