import { Footer } from "components/Footer/Footer"
import { Navbar } from "components/Navbar/Navbar"
import { LayoutProps } from "types"

export const Layout = ({ children }: LayoutProps) => {
  return(
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}