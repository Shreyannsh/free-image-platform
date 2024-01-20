import { useContext } from "react";
import { imageContext } from "../../context/context";
import "./individualPage.css";
import { FaRegWindowClose } from "react-icons/fa";

function IndividualPage({ id, show, onClose }) {
  const { imageCollection } = useContext(imageContext);
  const selectedImage = imageCollection.find((image) => image.id === id);
  if (!show) {
    return null;
  }
  return (
    <div className="parent">
      <div className="child">
        <nav>
          <p>Preview ID:{selectedImage.id}</p>
          <div>
            <FaRegWindowClose />
          </div>
        </nav>
        <div>
          <div>
            <img
              className="large-image"
              src={selectedImage.largeImageURL}
              alt=""
            />
            <div className="image-tag-list">
              <b> Tags:</b>
              {selectedImage.tags.split(",").map((tag) => (
                <p className="image-tag">{tag}</p>
              ))}
            </div>
            <div>
              <p>Download</p>
              <table>
                <th>
                  <td>small</td>
                </th>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualPage;
