import React, { Component } from "react";

class TabsContent extends Component {
  render() {
    return (
      <div
        className={`tabs__content ${
          this.props.activeTab == this.props.tabId ? "active" : ""
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default TabsContent;
