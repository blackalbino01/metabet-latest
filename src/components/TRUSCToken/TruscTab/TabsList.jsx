import React, { Component } from "react";

class TabsList extends Component {
  render() {
    return <ul className="tabs__list">{this.props.children}</ul>;
  }
}

export default TabsList;
