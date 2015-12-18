import React from 'react';
import SecondaryComponent from 'components/secondaryComponent';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  console.log(state);
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const IndexPage = React.createClass({

  getInitialState: function getInitialState() {
    return {};
  },

  render: function render() {
    return (
      <div>
        <h1>Hi</h1>
        <SecondaryComponent />
      </div>
    );
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);