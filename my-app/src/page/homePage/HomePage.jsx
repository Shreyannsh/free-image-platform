import "./HomePage.css";

import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import ProductListPage from "../productListPage/productListPage";
import { imageContext } from "../../context/context";
import Loader from "../../components/loader/loader";

function HomePage() {
  const {
    searchedText,
    convertedText,
    imageCollection,
    handleSearch,
    setSearchedText,
    isLoading,
  } = useContext(imageContext);

  return (
    <div className="homepage">
      {isLoading && <Loader />}
      <nav>
        <p>Homepage</p>
        <div>
          <Link className="link">Login</Link>

          <Link className="link create-btn">Create Account</Link>
        </div>
      </nav>
      {!imageCollection && (
        <p className="text">Discover over 2,000,000 free Stock Images</p>
      )}

      <div
        className="search-area"
        style={{
          marginTop: imageCollection ? "68px" : "",
          marginBottom: imageCollection ? "34px" : "",
        }}
      >
        <span className="search-icon">
          <span className="icon">
            <CiSearch />
          </span>
          <span className="pipe">|</span>
        </span>

        <input
          className="searchBar"
          placeholder="Search"
          value={searchedText}
          type="text"
          onChange={(e) => setSearchedText(e.target.value)}
        />

        <span className="go" onClick={() => handleSearch()}>
          Go!
        </span>
      </div>
      <div>
        {" "}
        {!imageCollection && (
          <p className="trending-tags">
            <b>Trending: </b> flowers, love, forest, river
          </p>
        )}
      </div>
      {imageCollection && (
        <h1 className="searched-text">
          Result: {convertedText.replace(/\+/g, " ")}
        </h1>
      )}
      <ProductListPage
        show={imageCollection ? true : false}
        data={imageCollection}
      />
    </div>
  );
}

export default HomePage;
