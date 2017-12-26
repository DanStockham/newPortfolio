import React, { Component } from 'react';
import Markdown from 'react-markdown';
import getBlogPosts from '../api/getBlogPosts';

/**
 * Blog
 */
export class Blog extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    getBlogPosts.then((posts) => {
      this.setState({ posts });
    });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return <Markdown source={post.content} />
    })

    console.log(this.state.posts)
    return (
      <div className="app-page">
        <div className="app-content">
          <h1 className="app-content__header">Blog</h1>
          {posts || <div>Hmmm... no content</div>}
        </div>
      </div>
    );
  }
}

export default Blog;
