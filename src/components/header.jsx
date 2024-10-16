import React, { useState, useEffect } from "react";

export const Header = (props) => {
  // Array of image URLs
  const images = [
    "img/Backyardpool.jpg", // Replace with your actual image paths
    "img/Backyardpool3.jpg",
    "img/Backyardpool4.jpg",
    "img/Backyardpool2.jpg",
    "img/Backyardpool.jpg"
  ];

  // State to keep track of current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]); // Run effect only when images length changes

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <img
            src={images[currentImageIndex]}
            alt="Slide Image"
            style={{ 
              width: "100%", // Full width of the container
              height: "900px", // Fixed height for the image
              objectFit: "cover" // Maintain aspect ratio while covering the area
            }}
          />
        </div>
      </div>
    </header>
  );
};