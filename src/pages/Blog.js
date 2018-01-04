import React, { Component } from 'react';
import { Link } from 'react-router';
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
    }).catch((err) => {
      console.log(err)
      this.setState({ loading: false, errors: { callError: `Couldn't pull down blog posts due to network error. Please contact me with further assistance.`}});
    });
  }

  render() {
    console.log(this.state.posts)
    const isLoading = this.state.loading;

    const loading = <div>Loading...</div>

    const errorCheck = () => {
      const errors = this.state.errors;

      if(this.state.errors !== {}) {
        for(var prop in errors) {
          return <div className="error-message">{ errors[prop] }</div>;
        }
      } 
      return this.state.posts.length === 0 ? <div>Hmmm... no content</div> : 
        this.state.posts.sort((a,b) => a.unixTime < b.unixTime).map((post, idx) => {
        return (
          <Link key={idx} to={{
              pathname: `blog/${post.slug}`,
              state: { post }
            }} >
            <div className="blog-content__post-card">
              <h6 className="">{post.publishDate}</h6>
              <h2>{post.title}</h2>
              <Markdown source={post.content} />
            </div>
          </Link>
        )
        
        });
      
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
