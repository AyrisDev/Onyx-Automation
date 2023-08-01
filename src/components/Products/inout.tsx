import React from "react";
import InOut from "lib/products/inout.json";
import ProductCard from "components/card";

const inout = () => {
  const section = "Controller";
  return (
    <div className="gap-2 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
      {InOut.map((engines) => (
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

export default inout;
