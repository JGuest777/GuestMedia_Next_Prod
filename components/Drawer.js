import Link from '../components/Utils/LinkWrap'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import Drawer from '@material-ui/core/Drawer'
import { useTheme } from '@material-ui/core/styles'
import { useHeaderStyles } from '../styles/Header'

export default function MobileDrawer({ links, open, setOpen }) {
	const classes = useHeaderStyles()
	const theme = useTheme()
	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Drawer
			className={classes.drawer}
			variant='temporary'
			anchor='right'
			open={open}
			ModalProps={{ onBackdropClick: handleDrawerClose }}
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>
			<Divider />
			<List>
				<Link href='/'>
					<ListItem button className={classes.navLink}>
						Home
					</ListItem>
				</Link>
				{links.map((link) => (
					<Link
						href={`/${link.toLowerCase()}`}
						color='primary'
						className={classes.navLink}
					>
						<ListItem button className={classes.navLink}>
							{link}
						</ListItem>
					</Link>
				))}
			</List>
			{/* TODO: Social Buttons below divider */}
			{/* <Divider />
        <List>
        </List> */}
		</Drawer>
	)
}
