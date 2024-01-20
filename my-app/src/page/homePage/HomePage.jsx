import "./HomePage.css";

import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductListPage from "../productListPage/productListPage";
import { imageContext } from "../../context/context";

function HomePage() {
  const {
    searchedText,
    convertedText,
    imageCollection,
    search,
    handleSearch,
    setSearchedText,
    setConvertedText,
  } = useContext(imageContext);

  // const [searchedText, setSearchedText] = useState("");
  // const [convertedText, setConvertedText] = useState("");
  // const [imageCollection, setImageCollection] = useState(null);
  // const search = () => {
  //   if (searchedText) {
  //     setConvertedText(searchedText.replace(/\s+/g, "+"));
  //   }
  // };

  // const handleSearch = async () => {
  //   try {
  //     if (convertedText) {
  //       const response = await axios.get(
  //         `https://pixabay.com/api/?key=41907647-3c21440eb2cf558ad433d1b30&q=${convertedText}&image_type=photo`
  //       );
  //       const data = response.data;
  //       setImageCollection(() => data.hits);
  //       setSearchedText("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   search();
  // }, [searchedText]);

  console.log(imageCollection);
  return (
    <div className="homepage">
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
