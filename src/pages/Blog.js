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
      posts: [],
      errors: {},
      loading: true
    }
  }
  componentDidMount() {
    getBlogPosts.then((posts) => {
      if(posts !== undefined) this.setState({ posts, loading: false });
      else return posts;
    }).then((err) => {
      this.setState({ loading: false, errors: { callError: `Couldn't pull down blog posts due to network error. Please contact me with further assistance.`}});
    });
  }

  render() {
    const isLoading = this.state.loading;

    const loading = <div>Loading...</div>

    const errorCheck = () => {
      const errors = this.state.errors;

      const posts = this.state.posts === [] ? posts.map((post) => {
        return <Markdown className="blog-content__post" source={post.content} />
        }) : <div>Hmmm... no content</div>
      if(this.state.errors !== {}) {
        for(var prop in errors) {
          return <div className="error-message">{ errors[prop] }</div>;
        }
      } 

      return posts;

     }
    return (
      <div className="app-page">
        <div className="app-content">
          <div className="app-content__blog-content">
          <h1 className="app-content__header">Blog</h1>
          { isLoading ? loading : errorCheck() }
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
