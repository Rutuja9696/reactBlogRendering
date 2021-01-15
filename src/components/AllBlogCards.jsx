import { Component } from "react";
import { Link } from "react-router-dom";

class AllBlogCards extends Component {
  render() {
    return (
      <div>
        <p>{this.props.blog.title}</p>
        <p>{this.props.blog.author}</p>
        <img src={this.props.blog.imageUrl} alt="Blog" />
      </div>
    );
  }
}
export default AllBlogCards;
