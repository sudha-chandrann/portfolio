'use client';
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        
        const hoverableElements = document.querySelectorAll("a, button");
        hoverableElements.forEach((el) => {
          el.addEventListener("mouseenter", onLinkMouseEnter);
          el.addEventListener("mouseleave", onLinkMouseLeave);
        });
      };

      const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
        
        const hoverableElements = document.querySelectorAll("a, button");
        hoverableElements.forEach((el) => {
          el.removeEventListener("mouseenter", onLinkMouseEnter);
          el.removeEventListener("mouseleave", onLinkMouseLeave);
        });
      };

      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const onMouseEnter = () => {
        setVisible(true);
      };

      const onMouseLeave = () => {
        setVisible(false);
      };

      const onMouseDown = () => {
        setClicked(true);
      };

      const onMouseUp = () => {
        setClicked(false);
      };

      const onLinkMouseEnter = () => {
        setLinkHovered(true);
      };

      const onLinkMouseLeave = () => {
        setLinkHovered(false);
      };

      addEventListeners();
      return () => removeEventListeners();
    }
  }, []);

  // Don't render anything on server-side or if not mounted yet
  if (!isMounted) {
    return null;
  }

  // Don't render on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor cursor-dot ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: clicked ? "scale(0.5)" : "scale(1)",
          transition: "transform 0.1s ease, opacity 0.2s ease",
          boxShadow: linkHovered 
            ? "0 0 20px 5px rgba(var(--primary-rgb), 0.5), 0 0 10px 2px rgba(var(--primary-rgb), 0.3)" 
            : "none",
          backgroundColor: `rgba(var(--primary-rgb), ${linkHovered ? 0.8 : 0.7})`,
        }}
      />
      <div
        className={`custom-cursor cursor-ring ${visible ? "opacity-100" : "opacity-0"} ${
          linkHovered ? "hover-expand" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          borderColor: `rgba(var(--primary-rgb), ${linkHovered ? 1 : 0.5})`,
          transform: linkHovered ? "scale(1.5)" : "scale(1)",
          transition: "all 0.2s ease-out",
        }}
      />
    </>
  );
}
