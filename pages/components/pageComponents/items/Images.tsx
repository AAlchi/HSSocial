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
  const [imageUrls, setImageUrls] = useState(imageUrl);
  const [imageNames, setImageNames] = useState(imageName);
  const [types, setTypes] = useState(type);

  const router = useRouter()

  return (
    <>
      {types == "rectangle" && (
        <div className="flex flex-col items-center justify-center">
          <Image
            width="120"
            height="200"
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
              transform: "translateY(-50%)", 
              backgroundColor: "rgb(5, 5, 5, 0.6)", 
              cursor: "pointer",
            }}
            className="relative text-white p-3 rounded-lg w-4/5 font-sm text-center"
            onClick={() => router.push("/")}
          >
            @{personName}
          </span>
        </div>
      )}

      {types == "littleProfile" && (
        <Image
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

      {types == "post" && (
        <Image
          height={window.innerHeight}
          width={window.innerWidth}
          src={imageUrl}
          alt={imageName}
          style={{
            width: "100%",
            minWidth: "100%",
            objectFit: "cover",
            borderRadius: "2px",
            backgroundColor: "rgb(5, 5, 5, 0.3)",
            cursor: "pointer",
          }}
        />
      )}
      {types == "largeProfile" && (
        <Image
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
