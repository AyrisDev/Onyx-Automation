import React from "react";

const Database = () => {
  return <div>produtcs</div>;
};

export default Database;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
