import React from 'react';
import './Content.css';
import Folder from '../images/class1.png';
import Image from '../images/class2.png';
import Online from '../images/class3.png';

const Content = () => {
  const handleCardClick = (cardTitle) => {
    alert(`You clicked on the card: ${cardTitle}`);
    // Add your navigation or other logic here
  };

  return (
    <main>
      <section className="hero">
        <h1>Welcome to StyleAI!</h1>
        <p>One stop solution for all your fashion desinging</p>
      </section>
      <section className="cards">
        <div className="card" onClick={() => handleCardClick('Rohit Kasat')}>
          <img alt="Rohit Kasat icon" src={Image} className="card-img" />
          <h3>Rohit Kasat</h3>
          <h4>Dev</h4>
        </div>
        <div className="card" onClick={() => handleCardClick('Shakti Saxena')}>
          <img alt="Shakti Saxena" src={Image} className="card-img" />
          <h3>Shakti Saxena</h3>
          <h4>Dev</h4>
        </div>
        <div className="card" onClick={() => handleCardClick('Shreya Bhongale')}>
          <img alt="Shreya Bhongale icon" src={Image} className="card-img" />
          <h3>Shreya Bhongale</h3>
          <h4>Dev</h4>
        </div>
      </section>
    </main>
  );
};

export default Content;
