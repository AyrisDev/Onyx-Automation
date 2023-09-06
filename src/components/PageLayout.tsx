import { ReactNode } from 'react'
import Navbar from 'components/Navigation/Navbar'
import Footer from 'components/Footer/footer'
type Props = {
   children?: ReactNode
}

export default function Layout({ children }: Props) {
   return (
      <>
         <Navbar />
         <main>{children}</main>
         <Footer />
      </>
   )
}
