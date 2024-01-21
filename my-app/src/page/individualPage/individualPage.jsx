import { useContext, useState } from "react";
import { imageContext } from "../../context/context";
import "./individualPage.css";
import { FaRegWindowClose } from "react-icons/fa";
import { saveAs } from "file-saver";

function IndividualPage({ id, show, onClose }) {
  const { imageCollection } = useContext(imageContext);
  const selectedImage = imageCollection.find((image) => image.id === id);
  const [size, setSize] = useState("large");

  const downloadFunc = () => {
    const downloadLink = document.createElement("a");
    if (size === "small") {
      saveAs(selectedImage.previewURL, "small-image");
    } else if (size === "medium") {
      saveAs(selectedImage.largeImageURL, "medium-image");
    } else if (size === "large") {
      saveAs(selectedImage.webformatURL, "large-image");
    }
    downloadLink.download = { size }; // Set a default name if imageName is not provided

    // Append the link to the body and simulate a click
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
  };
  if (!show) {
    return null;
  }
  return (
    <div className="parent">
      <div className="child">
        <div className="header">
          <p>Preview ID:{selectedImage.id}</p>
          <div>
            <FaRegWindowClose className="close-btn" onClick={() => onClose()} />
          </div>
        </div>
        <div className="main-content">
          <div className="left-section">
            <img
              className="large-image"
              src={selectedImage.largeImageURL}
              alt=""
            />
            <div className="image-tag-listt">
              <b> Tags:</b>
              {selectedImage.tags.split(",").map((tag) => (
                <p className="image-tagg">{tag}</p>
              ))}
            </div>
          </div>
          <div className="right-section">
            <div>
              <p className="title">Download</p>
              <div className="table-container">
                <table>
                  <tbody>
                    <tr>
                      <td>Small</td>
                      <td className="second-parameter">
                        640x960
                        <input
                          name="size"
                          type="radio"
                          value="small"
                          onChange={(e) => setSize(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Medium</td>
                      <td className="second-parameter">
                        1920x2660
                        <input
                          name="size"
                          type="radio"
                          value="medium"
                          onChange={(e) => setSize(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Big</td>
                      <td className="second-parameter">
                        2400x3600
                        <input
                          name="size"
                          type="radio"
                          value="large"
                          checked
                          onChange={(e) => setSize(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="btn-section">
                {" "}
                <button onClick={() => downloadFunc()}>
                  Download for free!
                </button>
              </div>
            </div>
            <div>
              <p className="title">Information</p>
              <div className="info">
                <div className="info-section">
                  <p className="heading">User</p>
                  <p className="value">{selectedImage.user}</p>
                </div>
                <div className="info-section">
                  <p className="heading">User ID</p>
                  <p className="value">{selectedImage.user_id}</p>
                </div>
                <div className="info-section">
                  <p className="heading">Type</p>
                  <p className="value">{selectedImage.type}</p>
                </div>
                <div className="info-section">
                  <p className="heading">Views</p>
                  <p className="value">{selectedImage.views}</p>
                </div>
                <div className="info-section">
                  <p className="heading">Downloads</p>
                  <p className="value">{selectedImage.downloads}</p>
                </div>
                <div className="info-section">
                  <p className="heading">Likes</p>
                  <p className="value">{selectedImage.likes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualPage;
