import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectReddit, invalidateReddit } from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class App extends Component {
  handleChange = (nextReddit) => {
    this.props.dispatch(selectReddit(nextReddit))
  }
  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker value={selectedReddit} onChange={this.handleChange} options={['reactjs', 'frontend']} />
        <p>
          {lastUpdated && <span>Last Updated at {new Date(lastUpdated).toLocaleTimeString()}</span>}
        </p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && (
          <div>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  const { selectedReddit, postsByReddit } = state
  const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: [],
  }
  return {
    
    selectedReddit,
    posts,
    isFetching,
    lastUpdated,
  }
}

export default connect(mapStatetoProps)(App);