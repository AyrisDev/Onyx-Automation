import Hero from 'components/Hero/Hero'
import Products from 'components/Products/Products'
import VideoCard from 'components/videoCard'
import Partners from 'components/partners'
import { supabase } from 'lib/supabase'

type Props = {
   post?: string
}
export default function Index({ post }: Props) {
   return (
      <>
         <Hero />
         <Partners />
         <Products />
         <VideoCard />
      </>
   )
}

export async function getStaticProps(context: any) {
   const { data, error } = await supabase.from('testtable').select()
   return {
      props: {
         post: data,
         // You can get the messages from anywhere you like. The recommended
         // pattern is to put them in JSON files separated by locale and read
         // the desired one based on the `locale` received from Next.js.
         messages: (await import(`../../messages/${context.locale}.json`))
            .default,
      },
   }
}
