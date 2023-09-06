import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from 'lib/schemas'
import { documentInternationalization } from '@sanity/document-internationalization'
import { languageFilter } from '@sanity/language-filter'
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'

const config = defineConfig({
   projectId: '2wy8hb1r',
   dataset: 'production',
   title: 'Onyx Dash',
   apiVersion: '2023-09-05',
   basePath: '/admin',

   plugins: [
      deskTool(),
      // ... all other plugins
      visionTool({
         // Note: These are both optional
         defaultApiVersion: '2023-09-05',
         defaultDataset: 'production',
      }),
      media(),
   ],
   schema: {
      types: schemaTypes,
   },
})

export default config
