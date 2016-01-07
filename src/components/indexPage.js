import React from 'react';
import SecondaryComponent from 'components/secondaryComponent';
import { connect } from 'react-redux';
import { api, ui } from 'actions';
import _ from 'lodash';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: dispatch(api.posts()),
    exampleAction: (id) => dispatch(ui.exampleAction(id))
  };
}

const IndexPage = React.createClass({

  getInitialState: function getInitialState() {
    return {};
  },

  render: function render() {

    let postList;

    const posts = this.props.posts;
    if (!_.isEmpty(posts.data)) {
      const data = posts.data.data;
      postList = _.map(data, (p) => <li key={p.id}>{p.title}</li>);
    } else {
      postList = 'Loading';
    }

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {postList}
        </ul>
        <SecondaryComponent />
      </div>
    );
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
