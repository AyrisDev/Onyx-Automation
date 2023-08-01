import React from "react";

const Contact = () => {
  return <div>produtcs</div>;
};

export default Contact;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
