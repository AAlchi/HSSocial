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
    </>
  );
};

export default Images;
