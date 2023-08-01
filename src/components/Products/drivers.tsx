import React from "react";
import Drivers from "lib/products/drivers.json";
import ProductCard from "components/card";

const drivers = () => {
  const section = "Controller";
  return (
    <div className="sm:flex sm:flex-row gap-2">
      {Drivers.map((engines) => (
        <ProductCard
          title={engines.title}
          subTitle={engines.subTitle}
          image={engines.image}
          description={engines.description}
          section={section}
        />
      ))}
    </div>
  );
};

export default drivers;
