import React, { useState, useEffect } from 'react';
import "./hero.css";
import "../../../global.css";

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); 
  const typingSpeed = 150;
  const deleteSpeed = 100;
  const pauseTime = 1000;

  const words = ['Shorts', 'Reels', 'Clicks', 'Small Videos'];

  useEffect(() => {
    let timer;

    if (!isDeleting && displayText === words[wordIndex]) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(words[wordIndex].slice(0, displayText.length + 1));
      }, typingSpeed);
    }

    // Alternar el cursor cada 500ms mientras se escribe
    if (!isDeleting) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <div className="hero-section">
        <div className='div-fuck'>
        <h1>
        Fuck you <span>{displayText}{showCursor && "|"}</span>
      </h1>
      <p>Time to Snap Out and Tune In to Real Life</p>
      <a href="" className='button-get'> Get SnapOut now </a>

        </div>
    </div>
  );
}

export default Hero;
