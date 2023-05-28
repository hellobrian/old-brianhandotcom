import React from "react";
import ImageList from "./ImageList";
import Dots from "./Dots";

interface CarouselProps {
  images: string[];
  withDots?: boolean;
}

export default function Carousel({ images, withDots = false }: CarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div
      data-testid="Carousel"
      style={{
        display: "grid",
        gap: "var(--space-s)",
      }}
    >
      <ImageList activeIndex={activeIndex} images={images} />
      {withDots && (
        <Dots
          activeIndex={activeIndex}
          images={images}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
}
