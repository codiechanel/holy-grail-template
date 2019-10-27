import * as React from "react";

import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";
import PeopleList from "./PeopleList";
import ProfileProgress from "./ProfileProgress";
import AvatarPanel from "./AvatarPanel";
import ui from "../common/UI";
import { ThemeProvider } from "emotion-theming";

Dashboard.propTypes = {
  path: PropTypes.string,
  default: PropTypes.bool
};

type ButtonProp = {
  primary?: string;
  flexDirection: string;
  flex?: number;
  padding?: number;
  theme?:any
};

const Panel = styled.div<ButtonProp>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex: ${({ flex = 1 }) => flex};
  padding: ${({ padding = 0 }) => padding};
  background-color: ${props => props.theme.colors.primary};
`;

// const Button = styled.button(
//     {
//       color: 'darkorchid'
//     },
//     props => ({
//       fontSize: props.fontSize
//     })
// )

const theme = {
  colors: {
    primary: "#192033",
     secondary: "#242A40",
    // secondary: "#4f5573",
    accent1: "#5179FF",
    accent2:"#F2B705",
    accent3: "#F26363"
  }
};

export default function Dashboard() {
  return (
    //  padding here has no effect. Why?
    <ThemeProvider theme={theme}>
      <Panel padding={0} flexDirection="row">
        <PeopleList />

        {/*padding has no effect here */}
        <Panel
          padding={0}
          flexDirection="column"
          // style={{
          //   backgroundColor: "red"
          // }}
        >
          <AvatarPanel />
          <ProfileProgress />
        </Panel>
      </Panel>
    </ThemeProvider>
  );
}
