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

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}
