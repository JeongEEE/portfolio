import { Fragment, useState, useEffect } from "react"
import Navigation from "./navigation"

const Layout = (props: any) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 70) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener("scroll", handleShow)
    return () => {
      window.removeEventListener("scroll", handleShow)
    }
  }, [])

  return (
    <Fragment>
      <div>
        <Navigation show={show} />
        <main>{props.children}</main>
      </div>
    </Fragment>
  )
}

export default Layout
