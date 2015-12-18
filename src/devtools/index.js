import React from 'react';
import { render } from 'react-dom';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';
// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
let DevTools;
if (!__PRODUCTION__) {

  DevTools = createDevTools(
    // Monitors are individually adjustable with props.
    // Consult their repositories to learn about those props.
    // Here, we put LogMonitor inside a DockMonitor.
    <DockMonitor toggleVisibilityKey={'ctrl-h'}
                 changePositionKey={'ctrl-q'}>
      <LogMonitor theme={'tomorrow'} />
    </DockMonitor>
  );

} else {
  DevTools = React.createClass({
    render: function renderDevTools() {
      return <div />;
    }
  });
}

export default DevTools;
