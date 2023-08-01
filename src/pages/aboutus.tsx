import React from "react";

const AboutUs = () => <div>produtcs</div>;

export default AboutUs;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
