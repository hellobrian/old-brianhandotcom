import React from "react";
import "./ImageList.css";

interface ImageListProps {
  images: string[];
  activeIndex: number;
}

export default function ImageList({ images, activeIndex }: ImageListProps) {
  return (
    <div className="ImageList">
      {images.map((image, index) => (
        <ImageListItem
          key={image}
          image={image}
          activeIndex={activeIndex}
          index={index}
        />
      ))}
    </div>
  );
}

interface ImageListItemProps {
  image: string;
  activeIndex: number;
  index: number;
}

const ImageListItem = ({ image, activeIndex, index }: ImageListItemProps) => {
  const ref = React.useRef(null);
  // const isActive = activeIndex === index;

  // React.useEffect(() => {
  //   if (ref.current && isActive) {
  //     const li = ref.current as HTMLLIElement;
  //     li.scrollIntoView({
  //       behavior: "smooth",
  //       inline: "start",
  //       block: "nearest",
  //     });
  //   }
  // }, [isActive]);

  return (
    <div
      className="ImageListItem"
      data-active-index={activeIndex === index}
      ref={ref}
    >
      <a href={image}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};
