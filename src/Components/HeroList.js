import React from "react";
import HeroCard from "./HeroCard";


const HeroList = ({ heroes, filterName, searchRate }) => {
  return (
    <div className="hero-list">
      {heroes
        .filter((hero) =>
          hero.name
            .toLowerCase()
            .trim()
            .includes(filterName.toLowerCase().trim()) && hero.rating >= searchRate
        )
        .map((hero) => (
          <div key={hero.id}>
            <HeroCard hero={hero} key={hero.id} />
          </div>
        ))}
    </div>
  );
};

export default HeroList;
