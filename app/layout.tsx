import type { Metadata } from 'next'
import './globals.css'
import Nav from "@/components/Nav"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'ICNAN',
  description: '',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   
    <html lang="en">
      
      
      <body>
      <Nav></Nav>
      <div className='pt-16'>
        {children}
        </div>
        <Footer></Footer>
        
        </body>
       
      
    </html>
  )
}
