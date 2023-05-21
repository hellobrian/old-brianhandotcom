import React from "react";
import "./ImageList.css";

interface ImageListProps {
  images: string[];
  activeIndex: number;
}

export default function ImageList({ images, activeIndex }: ImageListProps) {
  return (
    <ul className="ImageList">
      {images.map((image, index) => (
        <ImageListItem
          key={image}
          image={image}
          activeIndex={activeIndex}
          index={index}
        />
      ))}
    </ul>
  );
}

interface ImageListItemProps {
  image: string;
  activeIndex: number;
  index: number;
}

const ImageListItem = ({ image, activeIndex, index }: ImageListItemProps) => {
  const ref = React.useRef(null);
  const isActive = activeIndex === index;

  React.useEffect(() => {
    if (ref.current && isActive) {
      const li = ref.current as HTMLLIElement;
      li.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [isActive]);

  return (
    <li
      className="ImageListItem"
      data-active-index={activeIndex === index}
      ref={ref}
    >
      <img src={image} alt="" />
    </li>
  );
};
