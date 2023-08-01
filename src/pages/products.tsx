import React from "react";

const Products = () => {
  return <div>produtcs</div>;
};

export default Products;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
