import React from "react";
import Engin from "lib/products/engines.json";
import ProductCard from "components/ProductsPage/cards";
const ControlDrivers = () => {
  const section = "Engines";
  return (
    <div className="sm:flex sm:flex-row gap-2">
      {Engin.map((engines) => (
        <ProductCard
          title={engines.title}
          subTitle={engines.subTitle}
          image={engines.image}
          description={engines.description}
          section={section}
          key={engines.title}
        />
      ))}
    </div>
  );
};

export default ControlDrivers;
