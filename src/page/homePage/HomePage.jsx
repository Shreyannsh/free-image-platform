import "./HomePage.css";

import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import ProductListPage from "../productListPage/productListPage";
import { imageContext } from "../../context/context";
import Loader from "../../components/loader/loader";
import axios from "axios";

function HomePage() {
  const {
    searchedText,
    convertedText,
    imageCollection,
    handleSearch,
    setSearchedText,
    isLoading,
  } = useContext(imageContext);

  const [coverImage, setCoverImage] = useState("");

  const realWords = [
    "apple",
    "banana",
    "orange",
    "elephant",
    "guitar",
    "computer",
    "sunshine",
    "mountain",
    "ocean",
    "butterfly",
    // Add more words as needed
  ];

  function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * realWords.length);
    return realWords[randomIndex];
  }

  // Example: Generate a random word
  const randomWord = generateRandomWord();
  console.log(randomWord);

  const coverImageFunc = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=41907647-3c21440eb2cf558ad433d1b30&q=${randomWord}&image_type=photo`
      );
      const data = response.data.hits[0];
      setCoverImage(data.webformatURL);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    coverImageFunc();
  }, []);
  console.log(coverImage);
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${coverImage})`,
      }}
    >
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
