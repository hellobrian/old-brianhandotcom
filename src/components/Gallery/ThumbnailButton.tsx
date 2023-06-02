import React from "react";
import useMediaQuery from "../useMediaQuery";

interface ThumbnailButtonProps {
  image: string;
  currentImgSrc: string;
  onClick: () => void;
}

export default function ThumbnailButton({
  image,
  currentImgSrc,
  onClick,
}: ThumbnailButtonProps) {
  const matches = useMediaQuery("(min-width: 400px)");
  return (
    <button
      key={image}
      type="button"
      style={{ all: "unset", height: "fit-content" }}
      onClick={onClick}
    >
      <img
        src={image}
        style={{
          width: "100%",
          borderRadius: matches ? "10px" : "0px",
          opacity: image === currentImgSrc ? 0.5 : 1,
        }}
      />
    </button>
  );
}
