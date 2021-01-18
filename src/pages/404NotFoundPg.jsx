import { Component } from "react";
import { Link } from "react-router-dom";
import NotFound from "../styles/NotFound.module.css";

class PageNotFound extends Component {
  render() {
    return (
      <div className={NotFound.container}>
        <img
          className={NotFound.picture}
          src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
          alt="404 Page Not Found"
        />
        <Link to="/blogs">
          <button className={NotFound.backButton}>Go Back</button>
        </Link>
      </div>
    );
  }
}
export default PageNotFound;
