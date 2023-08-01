import React from "react";
import Controller from "lib/products/controller.json";
import ProductCard from "components/card";
const controller = () => {
  const section = "Controller";
  return (
    <div className="gap-2 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
      {Controller.map((engines) => (
        <ProductCard
          title={engines.title}
          subTitle={engines.subTitle}
          image={engines.image}
          description={engines.description}
          section={section}
          key={section}
        />
      ))}
    </div>
  );
};

export default controller;
