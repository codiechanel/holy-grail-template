import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import Autocomplete from "./Autocomplete";
import List1 from "./List1";

class Members extends React.Component<any, any> {
  state = {
    items: []
  };

  render() {
    return (
      <MembersPanel>
        <Autocomplete />
        <List1 keyword="redux" />
      </MembersPanel>
    );
  }
}
export default Members;
