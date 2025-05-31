import React from 'react';
import './WCU.css'; // Optional for styling

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <h2>Why Choose Us</h2>

      <div className="why-section">
        <img
          src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80"
          alt="Quality Recipes"
        />
        <div>
          <h3>Curated Quality Recipes</h3>
          <p>
            Each recipe is handpicked and tested by our food-loving team. Whether you’re a beginner or a seasoned cook, our easy-to-follow guides help you create mouthwatering dishes with confidence.
          </p>
        </div>
      </div>

      <div className="why-section">
        <img
          src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80"
          alt="Global Flavors"
        />
        <div>
          <h3>Global Flavors</h3>
          <p>
            Explore the world on your plate! From Italian pasta to Indian curries and Thai street food, we bring you recipes that span cultures and continents.
          </p>
        </div>
      </div>

      <div className="why-section">
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
          alt="Easy to Use"
        />
        <div>
          <h3>Simple and User-Friendly</h3>
          <p>
            Our platform is designed with simplicity in mind. Browse, search, and save your favorite recipes with just a few clicks. Cooking has never been more enjoyable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
