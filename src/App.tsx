import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Info from '/src/info'
import About from '/src/about'
import Grid from '@mui/material/Grid';

const wrap = css`
	width: 100vw;
`
const content = css`
	min-width: 1100px;
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
`

function App() {

  return (
    <div css={wrap}>
			<Grid container direction="column" css={content}>
				<Info />
				<About />
			</Grid>
    </div>
  )
}

export default App
