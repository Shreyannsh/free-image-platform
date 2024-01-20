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
      <div className="search-area">
        <span className="search-icon">
          <span className="icon">
            <CiSearch />
          </span>
          <span className="pipe">|</span>
        </span>

        <input className="searchBar" placeholder="Search" type="text" />

        <span className="go">Go!</span>
      </div>
      <div>
        <p className="trending-tags">
          <b>Trending: </b> flowers, love, forest, river
        </p>
      </div>
    </div>
  );
}

export default HomePage;
