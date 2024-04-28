import React, { useEffect, useRef } from 'react';

export default function Try() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollBy({
      top: 0,
      left: -250, // Adjust scroll amount as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollBy({
      top: 0,
      left: 250, // Adjust scroll amount as needed
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: '500px',
        width: '100%',
        display: 'flex',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
      ref={containerRef}
    >
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          zIndex: '1',
        }}
        onClick={scrollLeft}
      >
        Left
      </button>
        <div
          style={{
            height: '300px',
            width: '250px',
            margin: '10px',
            border: '1px solid red',
          }}
        >
          <h1>Name: akash</h1>
          <h3>Roll: 1</h3>
          <p>Phone: 123456789</p>
        </div>
        {/* Add more boxes here */}
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          zIndex: '1',
        }}
        onClick={scrollRight}
      >
        Right
      </button>
    </div>
  );
}
