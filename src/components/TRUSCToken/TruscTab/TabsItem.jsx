import React, { Component } from "react";

class TabsItem extends Component {
  render() {
    const { handleClick, children } = this.props;
    return (
      <li
        className={`tabs__item ${this.props.className}`}
        onClick={handleClick}
      >
        {children}
      </li>
    );
  }
}

export default TabsItem;
