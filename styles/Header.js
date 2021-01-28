import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export const useHeaderStyles = makeStyles((theme) => ({
	root: {
		marginBottom: 75
	},
	appBar: {
		backgroundColor: 'transparent',
		boxShadow: 'none',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: drawerWidth
	},
	title: {
		flexGrow: 1
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		backdropFilter: 'blur(3.7px)'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-start'
	},
	drawerLink: {
		color: 'inherit',
		textDecoration: 'none'
	},
	navLink: {
		color: 'white',
		textDecoration: 'none',
		width: '100%',
		fontSize: '20px'
	}
}))
