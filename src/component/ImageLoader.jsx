import React, { useState } from "react";

export default function ImageLoader({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-200">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700 ease-in-out`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}