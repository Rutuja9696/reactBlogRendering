import { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <img alt="404 Page Not Found" />
        <Link to="/blogs">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
}
export default PageNotFound;
