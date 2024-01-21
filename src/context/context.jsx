import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const imageContext = createContext();

function ImageProvider({ children }) {
  const [searchedText, setSearchedText] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [imageCollection, setImageCollection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const search = () => {
    if (searchedText) {
      setConvertedText(searchedText.replace(/\s+/g, "+"));
    }
  };

  const handleSearch = async (value) => {
    try {
      if (convertedText) {
        setIsLoading(true);
        const response = await axios.get(
          `https://pixabay.com/api/?key=41907647-3c21440eb2cf558ad433d1b30&q=${
            value ? value : convertedText
          }&image_type=photo`
        );
        const data = response.data;
        setImageCollection(() => data.hits);
        setSearchedText(value ? value : "");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search();
  }, [searchedText]);

  return (
    <div>
      <imageContext.Provider
        value={{
          searchedText,
          setSearchedText,
          setConvertedText,
          convertedText,
          imageCollection,
          search,
          handleSearch,
          isLoading,
        }}
      >
        {children}
      </imageContext.Provider>
    </div>
  );
}

export default ImageProvider;
