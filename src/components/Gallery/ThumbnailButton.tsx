import React from "react";

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
          borderRadius: "10px",
          opacity: image === currentImgSrc ? 0.5 : 1,
        }}
      />
    </button>
  );
}
