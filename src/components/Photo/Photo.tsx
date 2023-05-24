import React from "react";
import "./Photo.css";

interface PhotoProps {
  src: string;
  alt: string;
}

export default function Photo({ src, alt }: PhotoProps) {
  const [zoom, setZoom] = React.useState(false);
  const handleClick = () => {
    setZoom(!zoom);
  };
  return (
    <img
      className="Photo"
      src={src}
      alt={alt}
      onClick={handleClick}
      data-zoom={zoom}
    />
  );
}
