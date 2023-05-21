import React from "react";
import "./Dots.css";

interface DotsProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
}

export default function Dots({
  activeIndex,
  setActiveIndex,
  images,
}: DotsProps) {
  return (
    <div className="dots">
      {images.map((image, index) => (
        <button
          key={image}
          type="button"
          className="button-reset"
          onClick={() => setActiveIndex(index)}
          data-active-index={activeIndex === index}
        />
      ))}
    </div>
  );
}
