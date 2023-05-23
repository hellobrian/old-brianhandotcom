import React from "react";
import ImageList from "./ImageList";
import Dots from "./Dots";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div style={{ display: "grid", gap: "var(--space-s)" }}>
      <ImageList activeIndex={activeIndex} images={images} />
      <Dots
        activeIndex={activeIndex}
        images={images}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
