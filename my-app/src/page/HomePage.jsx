import "./HomePage.css";

import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function HomePage() {
  return (
    <div className="homepage">
      <nav>
        <p>Homepage</p>
        <div>
          <Link className="link">Login</Link>

          <Link className="link create-btn">Create Account</Link>
        </div>
      </nav>
      <p className="text">Discover over 2,000,000 free Stock Images</p>
      <div>
        <span>
          <CiSearch /> |
        </span>
        <input type="text" />
        <span>Go!</span>
      </div>
      <div>
        <p>
          <b>Trending: </b>flowers,love,forest,river
        </p>
      </div>
    </div>
  );
}

export default HomePage;
