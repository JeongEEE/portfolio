import { css } from '@emotion/react';

export const whiteBtn = css`
	background-color: white;
	color: black;
	&:hover {
		background-color: #fff;
		color: black;
	}
`
export const blackTextBtn = css`
	color: black;
`
export const blueBtn = css`
	background-color: #1976d2;
	color: white;
	&:hover {
		background-color: #1976d2;
		color: white;
	}
`

export const blackGradient = css`
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right,
    #434343,
    #000000
  );
`

export const violetGradient = css`
  background: #804dee;
  background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
  background: -webkit-linear-gradient(
          -90deg, 
          #804dee 0%, 
          rgba(60, 51, 80, 0) 100%
  );
`

export const greenPinkGradient = css`
  background: #00cea8;
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
`

export const orangeTextGradient = css`
  background: #f12711; /* fallback for old browsers */
  background: -webkit-linear-gradient(
          to top, 
          #f12711, 
          #f5af19
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
          to top, 
          #f12711, 
          #f5af19
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const skillItem = css`
	border-radius: 10px;
	background-color:white;
	box-shadow: 4px 4px 5px 4px rgba(70,70,70,0.2);
	color: #837df6;
	&:hover {
		transform: scale(1.025);
		transition-duration: 0.3s;
		z-index: 3;
		box-shadow: 1px 1px 1px 1px rgba(70,70,70,0.2);
		color: blue;
	}
`