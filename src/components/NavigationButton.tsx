import React from "react";
import "./NavigationButton.css";

type Variant = "forward" | "backward";

interface ArrowRightProps {
  variant: Variant;
}

function ArrowRight({ variant }: ArrowRightProps) {
  return (
    <svg
      className="ArrowRight"
      data-variant={variant}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 96 960 960"
    >
      <path d="M304 974l-56-57 343-343-343-343 56-57 400 400-400 400z"></path>
    </svg>
  );
}

interface NavigationButtonProps {
  variant: Variant;
  onClick: () => void;
}

export default function NavigationButton({
  variant,
  onClick,
}: NavigationButtonProps) {
  return (
    <button
      className="NavigationButton"
      aria-label={variant}
      type="button"
      data-variant={variant}
      onClick={onClick}
    >
      <ArrowRight variant={variant} />
    </button>
  );
}
