import React from "react";
import TableOne from "./tableOne";
import TableTwo from "./tableTwo";
import DropDown from "./DropDown";

class Parent extends React.Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);
    this.handlerTwo = this.handlerTwo.bind(this);

    // Set some state
    this.state = {
      renderTable: false
    };
  }

  // This method will be sent to the child component
  handler(value) {
    this.setState({
      renderTable: true
    });
  }

  handlerTwo(value) {
    this.setState({
      renderTable: false
    });
  }

  // Render the child component and set the action property with the handler as value
  render() {
    return (
      <div>
        <DropDown
          value={this.state.renderTable}
          changeTableTwo={this.handlerTwo}
          changeTable={this.handler}
        />
        {this.state.renderTable ? <TableOne /> : <TableTwo />}
      </div>
    );
  }
}
export default Parent;
