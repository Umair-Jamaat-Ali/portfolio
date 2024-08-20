// TopArrowButton.js
"use client"
import React, { useState, useEffect } from 'react';
import './TopArrowButton.css';

const TopArrowButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Adjust the scroll threshold as needed
    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button className="top-arrow-button" onClick={scrollToTop}>
      ▲
    </button>
  ) : null;
};

export default TopArrowButton;
