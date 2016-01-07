import React, { Component, cloneElement } from 'react';

function childrenMonitorState(props, state, action) {
  const childArray = Array.isArray(props.children) ? props.children : [props.children];
  return childArray.map(child => {
    return !child.type.update ? state : child.type.update(child.props, state, action);
  });
}

function reducer(props, state = {}, action) {
  return {
    childrenMonitorState: childrenMonitorState(props, state.childMonitorState, action)
  };
}

export default class TabMonitor extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedMonitor: 0};
  }

  render() {
    const { children, monitorState, ...rest } = this.props;

    const childArray = Array.isArray(children) ? children : [children];

    const tabs = childArray.map( (e, i) => {
      return <li key={i} onClick={()=>{this.showMonitor(i);}}>{i}</li>;
    });

    const monitor = cloneElement(childArray[this.state.selectedMonitor], {
      monitorState: monitorState.childrenMonitorState[this.state.selectedMonitor],
      ...rest
    });

    return (
      <div style={{
        height: '100%',
        width: '100%',
      }}>
        <ul>
          {tabs}
        </ul>
        <div style={{position: 'relative'}}>
          {monitor}
        </div>
      </div>
    );
  }

  showMonitor(i) {
    this.setState({
      selectedMonitor: i
    });
  }


  static update = reducer;
}
