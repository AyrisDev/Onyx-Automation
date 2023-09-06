// ./schemas/presenterType.ts

import { defineType, defineField } from 'sanity'
import { baseLanguage } from './localeStringType.ts'
import { GrProjects } from 'react-icons/gr'

export const presenterType = defineType({
   title: 'Products',
   name: 'products',
   type: 'document',
   icon: GrProjects,
   fields: [
      defineField({
         name: 'name',
         type: 'string',
      }),
      defineField({
         name: 'title',
         type: 'localeString',
      }),
      defineField({
         name: 'description',
         type: 'localeString',
      }),
      defineField({
         name: 'poster',
         type: 'image',
         options: {
            hotspot: true, // <-- Defaults to false
         },
      }),

      defineField({
         name: 'categories',
         title: 'Product Categories',
         type: 'array',
         of: [
            defineType({
               name: 'category',
               title: 'Product Category',
               type: 'reference',
               to: [{ type: 'productcategory' }],
            }),
         ],
      }),
   ],
   preview: {
      select: {
         title: 'name',
         subtitle: 'title.en',
      },
   },
})
