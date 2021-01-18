import { Component } from "react";
import { Link } from "react-router-dom";
import BlogStyles from "../styles/Blog.module.css";

//markup of blog
class Blog extends Component {
  render() {
    return (
      <div className={BlogStyles.cards}>
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
        <div>
          {this.props.blog.links.map((link) => {
            return (
              <div key={`${link.id}`}>
                <Link
                  to={`/blogs/${link.id}`}
                  onClick={() => this.props.blogById(link.id)}
                >
                  <p>{link.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Blog;
