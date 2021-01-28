import { useState } from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Nav from './Nav'
import HideOnScroll from './Utils/HideOnScroll'
import Drawer from './Drawer'
import ScrollTop from './Utils/ScrollTop'
import { useHeaderStyles } from '../styles/Header'

export default function PersistentDrawerRight(props) {
	const links = ['About', 'Services', 'Contact']
	const classes = useHeaderStyles()
	const [open, setOpen] = useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	return (
		<div id='back-to-top-anchor' className={classes.root}>
			<HideOnScroll {...props}>
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='end'
							onClick={handleDrawerOpen}
							className={clsx(open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Nav />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<ScrollTop {...props}>
				<Fab color='default' size='small' aria-label='scroll back to top'>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
			<Drawer links={links} open={open} setOpen={setOpen} />
		</div>
	)
}
