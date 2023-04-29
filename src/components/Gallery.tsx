import React from "react";
import NavigationButton from "./NavigationButton";

interface GalleryProps {
  images: string[];
}

interface ThumbnailButtonProps {
  image: string;
  currentImgSrc: string;
  onClick: () => void;
}

function ThumbnailButton({
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
      <div
        style={{
          position: "relative",
        }}
      >
        <NavigationButton variant="backward" onClick={decrement} />
        <img
          src={currentImgSrc}
          alt=""
          style={{ width: "100%", borderRadius: "10px", columnSpan: "all" }}
        />
        <NavigationButton variant="forward" onClick={increment} />
      </div>
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
    </div>
  );
}
