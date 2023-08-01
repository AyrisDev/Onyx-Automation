import Hero from "components/Hero/Hero";
import Products from "components/Products/Products";
import VideoCard from "components/videoCard";
export default function Index() {
  return (
    <>
      <Hero />
      <Products />
      <VideoCard />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
