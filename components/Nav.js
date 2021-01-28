import { useState, useEffect, useRef } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
// Overrides Nextjs 'Link'
import Link from '../components/Utils/LinkWrap'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { useHeaderStyles } from '../styles/Header'

export default function Nav() {
	const classes = useHeaderStyles()
	const anchorRef = useRef(null)
	const [openMenu, setOpenMenu] = useState(false)

	// return focus to the button when we transitioned from !openMenu -> openMenu
	const prevOpenMenu = useRef(openMenu)
	useEffect(() => {
		if (prevOpenMenu.current === true && openMenu === false) {
			anchorRef.current.focus()
		}
		prevOpenMenu.current = openMenu
	}, [openMenu])

	const handleToggle = () => {
		setOpenMenu((prevOpenMenu) => !prevOpenMenu)
	}

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}
		setOpenMenu(false)
	}

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpenMenu(false)
		}
	}

	return (
		<div className='nav'>
			<List
				style={{
					display: 'flex',
					justifyContent: 'flex-end'
				}}
			>
				<Link href='/' color='primary'>
					<ListItem button className={classes.navLink}>
						Home
					</ListItem>
				</Link>
				<Link href='/about'>
					<ListItem button className={classes.navLink}>
						About
					</ListItem>
				</Link>
				<ListItem
					button
					ref={anchorRef}
					aria-controls={openMenu ? 'menu-list-grow' : undefined}
					aria-haspopup='true'
					onClick={handleToggle}
					className={classes.navLink}
				>
					Services
					<Popper
						open={openMenu}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
										placement === 'bottom' ? 'center top' : 'center bottom'
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList
											autoFocusItem={openMenu}
											id='menu-list-grow'
											onKeyDown={handleListKeyDown}
										>
											<Link href='/services'>
												<MenuItem
													onClick={handleClose}
													className={classes.navLink}
												>
													Web Design
												</MenuItem>
											</Link>
											<Link href='/services'>
												<MenuItem
													onClick={handleClose}
													className={classes.navLink}
												>
													Videography
												</MenuItem>
											</Link>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</ListItem>
				<Link href='/contact'>
					<ListItem button className={classes.navLink}>
						Contact
					</ListItem>
				</Link>
			</List>
		</div>
	)
}
