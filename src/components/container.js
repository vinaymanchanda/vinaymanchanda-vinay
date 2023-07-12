import React, { useState, useRef, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//import YouTubeCard from "./youtubeCard";

const Container = () => {
  const [click, setClick] = useState(false);
  const videoRef = useRef(null);

  const mediaArray = [
    {
      type: "video",
      title:
        "Lorem Ipsum Lorem Ipsum Lorrem Ipsum Lorem Ipsuem Ipsum Lorem Ipsum Lorem Ipsum",
      url: " https://www.youtube.com/watch?v=18xB7LFRv6E",
    },
    {
      type: "gif",
      title:
        "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
      url: "https://infowithart.com/wp-content/uploads/2019/01/Cover-image.gif",
    },
    {
      type: "image",
      title: "Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum",
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
    <div className="">
      {mediaArray.map((media, index) => {
        return (
          <div className="newcard m-2 p-3 border border-dark">
            <div className="bottom-element">
              <div className="content-wrapper">
                <div>
                  {click ? (
                    <AiFillHeart
                      size={22}
                      className="cursor-pointer absolute right-2 top-5 "
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Remove from favourite"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={22}
                      className="cursor-pointer absolute right-2 top-5"
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "#333"}
                      title="Add to favourite"
                    />
                  )}
                </div>
                <div className="media-main-wrapper">
                  {media.type === "image" ? (
                    <img
                      className="media-wrapper"
                      src={media.url}
                      alt="{`Image ${index}`} "
                    />
                  ) : null}
                  {media.type === "video" ? (
                    <video
                      className="media-wrapper"
                      src={media.url}
                      controls
                      autoPlay
                      muted
                      key={`video-${index}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                  {media.type === "gif" ? (
                    <img
                      className="media-wrapper"
                      src={media.url}
                      alt={`GIF ${index}`}
                    />
                  ) : null}
                </div>
              </div>
              <div className="title-wrapper">{media.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Container;
