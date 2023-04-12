import React, { Fragment, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-scroll';
import { useRecoilState } from 'recoil';
import { isMobileState } from '/src/states/atoms'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const header = (props) => css`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	z-index: 5;
	box-shadow: ${props.show ? '2px 2px 2px 0px grey' : 'none'};
	color: ${props.show ? 'black' : 'white'};
	background-color: ${props.show ? 'white' : 'transparent'};
`
const content = css`
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
	font-weight: bold;
`
const nav = css`
	cursor: pointer;
	&:hover {
		color: blue;
	}
`

const Navigation = ({show}) => {
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	// const isMobile = useMediaQuery('(max-width:600px)');
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	// xs: 0px, sm: 600px, md: 900px, lg: 1200px, xl: 1536px
	const [localIsMobile, setLocalIsMobile] = useRecoilState(isMobileState);

	const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
	const scrollToBottom = (bottom) => {
    window.scrollTo({ top: bottom, behavior: 'smooth' });
  }
	const toggleDrawer = (status: boolean) => {
		setOpen(status);
  };

	useEffect(() => {
		setLocalIsMobile(isMobile);
		return () => {
			
		}
	}, [isMobile])
	

	return (
		<header css={header({show})}>
			<Grid container direction="row" css={content} justifyContent="space-between" alignItems="center">
				<Grid item container xs={2} pl={isMobile ? 2 : 0} css={css`${nav};font-size:1.5rem;`}
					onClick={scrollToTop}>
					김규정 Portfolio
				</Grid>
				{isMobile 
				? <Grid item container xs={'auto'} justifyContent="right" alignItems="center">
						<Button onClick={()=> toggleDrawer(true)}>
							<MenuIcon fontSize="large" sx={{ color: show ? 'black' : 'white' }} />
						</Button>
						<Drawer anchor={"top"} open={open} onClose={()=> toggleDrawer(false)}>
							<Box sx={{ width: 'auto' }} role="presentation"
								onClick={()=> toggleDrawer(false)}
								onKeyDown={()=> toggleDrawer(false)}>
								<List>
									<ListItem disablePadding>
										<Link to="about" spy={true} smooth={true} css={css`width:100%;`}
											onClick={()=> toggleDrawer(false)}>
											<Grid container css={css`${nav};height:2.5rem;`} 
												justifyContent="center" alignItems="center">About Me</Grid>
										</Link>
									</ListItem>
									<ListItem disablePadding>
										<Link to="skills" spy={true} smooth={true} css={css`width:100%;`}
											onClick={()=> toggleDrawer(false)}>
											<Grid container css={css`${nav};height:2.5rem;`} 
												justifyContent="center" alignItems="center">Skills</Grid>
										</Link>
									</ListItem>
									<ListItem disablePadding>
										<Link to="link" spy={true} smooth={true} css={css`width:100%;`}
											onClick={()=> toggleDrawer(false)}>
											<Grid container css={css`${nav};height:2.5rem;`} 
												justifyContent="center" alignItems="center">Link</Grid>
										</Link>
									</ListItem>
									<ListItem disablePadding>
										<Link to="projects" spy={true} smooth={true} css={css`width:100%;`}
											onClick={()=> toggleDrawer(false)}>
											<Grid container css={css`${nav};height:2.5rem;`} 
												justifyContent="center" alignItems="center">Projects</Grid>
										</Link>
									</ListItem>
									<ListItem disablePadding>
										<Link to="career" spy={true} smooth={true} css={css`width:100%;`}
											onClick={()=> toggleDrawer(false)}>
											<Grid container css={css`${nav};height:2.5rem;`} 
												justifyContent="center" alignItems="center">Career</Grid>
										</Link>
									</ListItem>
								</List>
							</Box>
						</Drawer>
					</Grid>
				: <Grid item container xs={10} direction="row" justifyContent="right" alignItems="center">
						<Link to="about" spy={true} smooth={true}>
							<Grid item container xs={'auto'} mr={3} css={nav}>About Me</Grid>
						</Link>
						<Link to="skills" spy={true} smooth={true}>
							<Grid item container xs={'auto'} mr={3} css={nav}>Skills</Grid>
						</Link>
						<Link to="link" spy={true} smooth={true}>
							<Grid item container xs={'auto'} mr={3} css={nav}>Link</Grid>
						</Link>
						<Link to="projects" spy={true} smooth={true}>
							<Grid item container xs={'auto'} mr={3} css={nav}>Projects</Grid>
						</Link>
						<Link to="career" spy={true} smooth={true}>
							<Grid item container xs={'auto'} mr={3} css={nav}>Career</Grid>
						</Link>
					</Grid>
				}
			</Grid>
		</header>
	)
}

export default Navigation