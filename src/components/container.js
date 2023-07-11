import React, { useState, useRef, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Container = () => {
  const [click, setClick] = useState(false);
  const videoRef = useRef(null);

 

  useEffect(() => {
    // Autoplay the video on component mount
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    
     //className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 "
       
    <div className="card border border-dark">
    
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

    <img
             src="https://infowithart.com/wp-content/uploads/2019/01/Cover-image.gif"
             className="rounded"
             alt=""
          />
        </div>
        


        //   {/* <div
        //   className={`favorite-icon ${isFavorite ? "favorite" : ""}`}
        //   onClick={handleFavoriteToggle}
        // ></div> */}

        //   {/* Media content (image, GIF, or video) goes here */}
        //   {/*side options */}

        //   {/* GIF
        //  <img
        //   src="https://infowithart.com/wp-content/uploads/2019/01/Cover-image.gif" 
        //   alt="Example GIF"
        //   className="gif"
        // /> */}

        //   {/* Video
        // <video
        //   src="https://www.youtube.com/watch?v=a3ICNMQW7Ok&ab_channel=TimotiusJoso"
        //   ref={videoRef}
        //   autoPlay
        //   muted
        //   loop
        //   className="video"
        // ></video> */}
       
        
        
    
  );
};

export default Container;
