"use client";

import { useEffect, useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

type Props = {
  isArrow: boolean;
};

export const Cursor = ({ isArrow }: Props) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - (isArrow ? 16 : 8),
        y: e.clientY - (isArrow ? 16 : 8),
      });
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );
    window.document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      window.document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  return (
    <div
      className={twMerge(
        "fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none opacity-0 z-90 flex justify-center items-center",
        visible && "opacity-100",
        !isArrow && "bg-white mix-blend-difference",
        isArrow && "w-16 h-16 -top-6 -left-6 border border-black"
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {isArrow && <VscArrowRight size={24} className="text-black z-100" />}
    </div>
  );
};
