import React from "react";
import ThumbnailButton from "./ThumbnailButton";
import Controls from "./Controls";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentImgSrc, setCurrentImgSrc] = React.useState(
    images[currentIndex]
  );

  React.useEffect(() => {
    if (currentIndex + 1 > images.length) {
      setCurrentIndex(0);
    }

    if (currentIndex <= -1) {
      setCurrentIndex(images.length - 1);
    }

    setCurrentImgSrc(images[currentIndex]);
  }, [currentIndex, currentImgSrc, images]);

  const increment = () => setCurrentIndex(currentIndex + 1);
  const decrement = () => setCurrentIndex(currentIndex - 1);

  return (
    <div
      style={{
        maxWidth: 900,
        display: "grid",
        gap: "30px",
      }}
    >
      <Controls images={images} increment={increment} decrement={decrement}>
        {/* CurrentImage */}
        <a href={currentImgSrc}>
          <img
            src={currentImgSrc}
            alt=""
            style={{ width: "100%", borderRadius: "10px", columnSpan: "all" }}
          />
        </a>
      </Controls>

      {/* ThumbnailGrid */}
      {images.length > 1 && (
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 30,
          }}
        >
          {images.map((image, index) => (
            <ThumbnailButton
              key={image}
              onClick={() => setCurrentIndex(index)}
              image={image}
              currentImgSrc={currentImgSrc}
            />
          ))}
        </div>
      )}
    </div>
  );
}
