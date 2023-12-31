// ./schemas/articleType.ts

import { defineType, defineField } from 'sanity'

export const articleType = defineType({
   title: 'Article',
   name: 'article',
   type: 'document',
   fields: [
      defineField({
         name: 'language',
         type: 'string',
         options: {
            list: [
               { title: 'English', value: 'en' },
               { title: 'Spanish', value: 'es' },
            ],
         },
      }),
      defineField({
         name: 'title',
         type: 'string',
      }),
      defineField({
         name: 'body',
         type: 'array',
         of: [{ type: 'block' }],
      }),
   ],
})
