import React, { useState, useRef, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Container = () => {
  const [click, setClick] = useState(false);
  const videoRef = useRef(null);

  const mediaArray = [
    {
      type: "video",
      url: " https://www.youtube.com/watch?v=a3ICNMQW7Ok&ab_channel=TimotiusJoso",
    },
    {
      type: "gif",
      url: "https://infowithart.com/wp-content/uploads/2019/01/Cover-image.gif",
    },
    {
      type: "image",
      url: "https://infowithart.com/wp-content/uploads/2019/01/Cover-image.gif",
    },
  ];

  useEffect(() => {
    // Autoplay the video on component mount
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className=" col-lg-7 m-2 p-3 card border border-dark">
      <div className="d-flex justify-content-between">
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5 "
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
        </div>
        <div>
          <div className="dummy-title">Dummy Title</div>
        </div>
      </div>

      <div>
        {mediaArray.map((media, index) => {
          if (media.type === "image") {
            return <img src={media.url} alt='{`Image ${index}`} '/>;
          } else if (media.type === "video") {
            return (
              <video
                src={media.url}
                controls
                autoPlay
                muted
                key={`video-${index}`}
              >
                Your browser does not support the video tag.
              </video>
            );
          } else if (media.type === "gif") {
            return <img src={media.url} alt={`GIF ${index}`} />;
          } else {
            return null; // Invalid media type, you can handle it as per your requirement
          }
        })}
      </div>
    </div>
  );
};

export default Container;
