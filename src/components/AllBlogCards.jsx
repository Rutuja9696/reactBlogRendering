import { Component } from "react";
import AllBlogsStyles from "../styles/AllBlogs.module.css";

//class component to display all blogs card
class AllBlogCards extends Component {
  render() {
    return (
      <>
        <img
          src={this.props.blog.imageUrl}
          alt="Blog"
          className={AllBlogsStyles.picture}
        />
        <h3 className={AllBlogsStyles.title}>{this.props.blog.title}</h3>
        <p className={AllBlogsStyles.author}>- {this.props.blog.author}</p>
      </>
    );
  }
}
export default AllBlogCards;
