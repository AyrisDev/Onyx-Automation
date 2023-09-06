import { createClient, groq } from 'next-sanity'

export const client = createClient({
   projectId: '2wy8hb1r',
   dataset: 'production',
   apiVersion: '2023-09-05',
})

export const getCategory = groq`*[_type == "productcategory" ]{
   "title": title.en
}`
