import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { Tabs, Tab, Container, Col, Row } from "react-bootstrap";
import styled from "@emotion/styled";
import api from "../common/api";
Home.propTypes = {
  path: PropTypes.string,
  default: PropTypes.bool
};
function Home() {
  let small = api.isScreenSmall();
  return (
    <ui.Panel flexDirection="column">

    </ui.Panel>
  );
}

export default Home;
