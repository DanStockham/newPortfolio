import React, { Component } from 'react';
import Markdown from 'react-markdown';
import getBlogPost from '../api/getBlogPost';

/**
 * Blog
 */
export class Blog extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      post: {},
      errors: {},
      loading: true
    }
  }
  componentDidMount() {
    const slug = this.props.params.slug;

    getBlogPost(slug).then((post) => {
      if(post !== undefined) this.setState({ post, loading: false });
    }).catch((err) => {
      this.setState({ loading: false, errors: { callError: `Couldn't pull down content due to network error. Please contact me with further assistance.`}});
    });
  }

  render() {
    const isLoading = this.state.loading;

    const loading = <div>Loading...</div>

    const title = this.state.title;

    const errorCheck = () => {
      const errors = this.state.errors;

      if(this.state.errors !== {}) {
        for(var prop in errors) {
          return <div className="error-message">{ errors[prop] }</div>;
        }
      } 
      return this.state.post !== {} ? (() => {
        const post = this.state.post;
        console.log(post)
        return (
          <div>
            <h1>{post.title}</h1>
            <Markdown className="blog-content__post" source={post.content} />
          </div>
          
        )
        })() : <div>Hmmm... no content</div>;
      
     }
    return (
      <div className="app-page">
        <div className="app-content">
          <div className="app-content__blog-content">
          <h1 className="app-content__header">{title}</h1>
          {  isLoading ? loading : errorCheck() }
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
