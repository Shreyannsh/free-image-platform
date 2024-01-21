import { useContext, useEffect, useState } from "react";
import "./productListPage.css";
import { imageContext } from "../../context/context";
import { Link } from "react-router-dom";
import IndividualPage from "../individualPage/individualPage";

function ProductListPage(props) {
  const { handleSearch } = useContext(imageContext);
  const [tags, setTags] = useState([]);
  const [itemId, setItemId] = useState("");
  const [show, setShow] = useState(false);
  const requiredTags = tags.splice(0, 7);
  console.log(requiredTags);
  useEffect(() => {
    if (props.data) {
      props.data.forEach((obj) => {
        let arr = obj.tags.split(",");
        arr.forEach((tag) => {
          setTags((prevTags) => {
            if (!prevTags.includes(tag.trim())) {
              return [...prevTags, tag.trim()];
            }
            return prevTags;
          });
        });
      });
    }
  }, [props.data]);
  const individualPageShow = (id) => {
    setItemId(id);
    setShow(!show);
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="image-list-page">
      <div className="tag-list">
        {requiredTags?.map((tag) => (
          <p className="tag" key={tag} onClick={() => handleSearch(tag)}>
            {tag}
          </p>
        ))}
      </div>
      <div className="image-list">
        {props.data.map((item) => (
          <div key={item.id} className="image-section">
            <img
              onClick={() => individualPageShow(item.id)}
              className="image"
              src={item.previewURL}
              alt="pic"
            />{" "}
            <div className="image-tag-list">
              {item.tags.split(",").map((tag) => (
                <p className="image-tag">{tag}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <IndividualPage show={show} onClose={() => setShow(!show)} id={itemId} />
    </div>
  );
}

export default ProductListPage;
