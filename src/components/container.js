import React, { useState, useRef, useEffect } from "react";
import { AiFillHeart,  AiOutlineHeart } from 'react-icons/ai';


const Container = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [click,setClick]= useState(false);
  const videoRef = useRef(null);



  const handleFavoriteToggle = () => {
    setIsFavorite((prevState) => !prevState);
  };


  useEffect(() => {
    // Autoplay the video on component mount
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);


  return (
    <div className="container">
      <div className="multimedia-container">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 ">
      <div className="card border border-dark">
        <div className="border border-dark">
         
        
        {/* Media content (image, GIF, or video) goes here */}
        {/*side options */}

         {/* GIF */}
         <img
          src="C:\Users\vmanc\Downloads\example.gif"  href="https://giphy.com/gifs/download-IRFQYGCokErS0"
          alt="Example GIF"
          className="gif"
        />

        {/* Video
        <video
          src="path-to-example-video.mp4"
          ref={videoRef}
          autoPlay
          muted
          loop
          className="video"
        ></video> */}

                <div>
                    {click ? (
                        <AiFillHeart
                        size={22}
                        className="cursor-pointer absolute right-2 top-5 "
                        onClick={()=> setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                        />


                    ):(

                        <AiOutlineHeart
                        size={22}
                        className="cursor-pointer absolute right-2 top-5"
                        onClick={()=> setClick(!click)}
                        color={click ? "red": "#333"}
                        title="Add to wishlist"
                        />
                    )
                    }
                    </div>
        <div
          className={`favorite-icon ${isFavorite ? "favorite" : ""}`}
          onClick={handleFavoriteToggle}
        ></div>
      </div>
      <div className="dummy-title">Dummy Title</div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Container;

