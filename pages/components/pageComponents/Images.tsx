import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface ImagesInterface {
  imageUrl: string;
  imageName: string;
  type: string;
  personName?: string;
  onClick: (event: Event) => void;
}

const Images: React.FC<ImagesInterface> = ({
  imageUrl,
  imageName,
  type,
  personName,
  onClick,
}) => { 
  const [types, setTypes] = useState(type);

  const router = useRouter()

  return (
    <> 

      {types == "littleProfile" && (
        <img
          height="50"
          width="50"
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
      {types == "largeProfile" && (
        <img
          width="170"
          height="170"
          src={imageUrl}
          alt={imageName}
          style={{
            width: "170px",
            height: "170px",
            maxWidth: "170px",
            maxHeight: "170px",
            minWidth: "170px",
            minHeight: "170px",
            objectFit: "cover",
            borderRadius: "20px",
            backgroundColor: "rgb(5, 5, 5, 0.3)",
            cursor: "pointer",
            border: "3px solid white",
          }}
        />
      )}
    </>
  );
};

export default Images;
