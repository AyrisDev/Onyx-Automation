import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from 'components/PageLayout'
import Hero from 'components/Hero/Hero'
import Products from 'components/Products/Products'
import VideoCard from 'components/videoCard'
import Partners from 'components/partners'
import { supabase } from 'lib/supabase'
import { client, getCategory } from 'lib/sanity-utils'
const Page: NextPageWithLayout = ({ categoryList }) => {
   console.log(categoryList + 'cattt')
   return (
      <>
         <Hero />
         <Partners />
         <Products categoryList={categoryList} />
         <VideoCard />
      </>
   )
}

Page.getLayout = function getLayout(page: ReactElement) {
   return <Layout>{page}</Layout>
}

export default Page

export async function getStaticProps(context: any) {
   const category = await client.fetch(getCategory)
   return {
      props: {
         categoryList: category,
         // You can get the messages from anywhere you like. The recommended
         // pattern is to put them in JSON files separated by locale and read
         // the desired one based on the `locale` received from Next.js.
         messages: (await import(`../../messages/${context.locale}.json`))
            .default,
      },
   }
}
