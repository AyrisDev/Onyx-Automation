// ./schemas/category.js

import { defineField, defineType } from 'sanity'
import { baseLanguage } from './localeStringType.ts'
// Install lucide.dev icons with "npm install lucide-react"
import { TagIcon } from 'lucide-react'

export default defineType({
   name: 'productcategory',
   title: 'ProductCategory',
   type: 'document',
   icon: TagIcon,
   fields: [defineField({ name: 'title', type: 'localeString' })],
   // Customize the preview so parents are visualized in the studio
   preview: {
      select: {
         title: 'title.tr',
         subtitle: 'title.en',
      },
   },
})
