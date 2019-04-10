import React from "react";

const Purchaselist = ({ soldCars }) => {
    let prices = []
  const Mapping = soldCars.map(({ _id, name, price, image }) => {
       prices.push({price})
      console.log(prices)
    return (
      <div key={_id}>
        <img src={image} alt={name} className="rounded float-left" />
        <h2>Car name:</h2>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    );
  });

  return <React.Fragment>{Mapping}</React.Fragment>;
};

export default Purchaselist;
