"use client";
import React, { useState } from "react";

interface ImageInterface {
  imageUrl: string;
  imageName: string;
  type: string;
}

const Image: React.FC<ImageInterface> = ({ imageUrl, imageName, type }) => {
  const [imageUrls, setImageUrls] = useState(imageUrl);
  const [imageNames, setImageNames] = useState(imageName);
  const [types, setTypes] = useState(type);

  return (
    <>
      {types == "rectangle" && (
        <div className="flex flex-col items-center justify-center">
          <img
            src={imageUrl}
            alt={imageName}
            style={{
              minWidth: "120px",
              width: "120px",
              minHeight: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
              backgroundColor: "rgb(5, 5, 5, 0.3)",
              cursor: "pointer",
              border: "3px solid black",
            }}
          />
          <span
            style={{
              top: "-50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgb(5, 5, 5, 0.6)",
              fontSize: "20px",
              cursor: "pointer",
            }}
            className="relative text-white p-3"
          >
            &Jimmy
          </span>
        </div>
      )}

      {types == "littleProfile" && (
        <img
          src={imageUrl}
          alt={imageName}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "20px",
            backgroundColor: "rgb(5, 5, 5, 0.3)",
            cursor: "pointer",
          }}
        />
      )}

      {types == "post" && (
        <img
          src={imageUrl}
          alt={imageName}
          style={{
            width: "100%",
            minWidth: "100%",
            objectFit: "cover",
            borderRadius: "10px",
            backgroundColor: "rgb(5, 5, 5, 0.3)",
            cursor: "pointer",
          }}
        />
      )}
      {types == "largeProfile" && (
        <img
          src={imageUrl}
          alt={imageName}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "20px",
            backgroundColor: "rgb(5, 5, 5, 0.3)",
            cursor: "pointer",
          }}
        />
      )}
    </>
  );
};

export default Image;
