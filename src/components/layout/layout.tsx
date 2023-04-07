import React, { Fragment, useState, useEffect } from 'react'
import Navigation from './navigation'
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid';

const layout = css`
	/* padding-top: 70px; */
`

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
			<Grid container css={layout}>
				<Navigation show={show} />
				<main>{props.children}</main>
			</Grid>
    </Fragment>
	)
}

export default Layout