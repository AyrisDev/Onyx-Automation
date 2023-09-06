'use client'

import { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Aside from 'components/Dashboard/aside'
import { supabase } from 'lib/supabase'
import { useRouter } from 'next/router'
import Login from 'components/Dashboard/login'
type Props = {
   children?: ReactNode
}

export default function Layout({ children }: Props) {
   const router = useRouter()
   const [session, setSession] = useState(null)

   useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
         setSession(session)
      })

      supabase.auth.onAuthStateChange((_event, session) => {
         setSession(session)
      })
   }, [])

   return (
      <>
         {!session ? (
            <Login />
         ) : (
            <>
               <Aside />
               <main>{children}</main>
            </>
         )}
      </>
   )
}

export async function getStaticProps(context: any) {
   const { data, error } = await supabase.from('users').select('username')
   return {
      props: {
         post: data,
         // You can get the messages from anywhere you like. The recommended
         // pattern is to put them in JSON files separated by locale and read
         // the desired one based on the `locale` received from Next.js.
         messages: (await import(`../../../messages/${context.locale}.json`))
            .default,
      },
   }
}
