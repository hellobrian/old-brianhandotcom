import React from "react";
import NavigationButton from "./NavigationButton";

interface ControlsProps {
  children: React.ReactNode;
  images: string[];
  increment: () => void;
  decrement: () => void;
}

export default function Controls({
  images,
  children,
  increment,
  decrement,
}: ControlsProps): JSX.Element {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {images.length > 1 && (
        <NavigationButton variant="backward" onClick={decrement} />
      )}
      {children}
      {images.length > 1 && (
        <NavigationButton variant="forward" onClick={increment} />
      )}
    </div>
  );
}
