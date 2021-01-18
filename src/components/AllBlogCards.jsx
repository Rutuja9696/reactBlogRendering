import { Component } from "react";
import AllBlogsStyles from "../styles/AllBlogs.module.css";

class AllBlogCards extends Component {
  render() {
    return (
      <div className={AllBlogsStyles.cards}>
        <img
          src={this.props.blog.imageUrl}
          alt="Blog"
          className={AllBlogsStyles.picture}
        />
        <h3 className={AllBlogsStyles.title}>{this.props.blog.title}</h3>
        <p className={AllBlogsStyles.author}>- {this.props.blog.author}</p>
      </div>
    );
  }
}
export default AllBlogCards;
