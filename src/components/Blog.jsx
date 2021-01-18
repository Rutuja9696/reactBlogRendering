import { Component } from "react";
import BlogStyles from "../styles/Blog.module.css";

class Blog extends Component {
  render() {
    return (
      <div className={BlogStyles.cards}>
        {/* <h1>blog</h1> */}
        <h2 className={BlogStyles.title}>{this.props.blog.title}</h2>
        <img
          src={this.props.blog.imageUrl}
          alt="Blog"
          className={BlogStyles.picture}
        />
        <p className={BlogStyles.author}>- {this.props.blog.author}</p>
        <p className={BlogStyles.content}>{this.props.blog.content}</p>
        <hr />
        <p className={BlogStyles.links}>Related Links:</p>
        <div></div>
      </div>
    );
  }
}
export default Blog;
