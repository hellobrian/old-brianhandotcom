import React from "react";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [imgSrc, setImgSrc] = React.useState(images[0]);

  const handleClick = (src: string) => setImgSrc(src);

  return (
    <div
      style={{
        maxWidth: 900,
        display: "grid",
        gap: "30px",
      }}
    >
      <img
        src={imgSrc}
        alt=""
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 30,
        }}
      >
        {images.map((image) => (
          <button
            key={image}
            type="button"
            style={{ all: "unset", height: "fit-content" }}
            onClick={() => handleClick(image)}
          >
            <img
              src={image}
              style={{
                width: "100%",
                borderRadius: "10px",
                opacity: image === imgSrc ? 0.5 : 1,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
