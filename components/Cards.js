import { Spring } from 'react-spring/renderprops.cjs'
import VisibilitySensor from './Utils/VisibilitySensor'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

export default function Cards() {
	return (
		<Grid container spacing={3} style={{ marginTop: '20px' }}>
			<Grid item xs={12} md={6} className='card-item_container'>
				<VisibilitySensor partialVisibility once>
					{({ isVisible }) => (
						<Spring
							delay={300}
							to={{
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
							}}
						>
							{(props) => (
								<div style={{ ...props }}>
									<Card className='cards'>
										<CardActionArea>
											<CardMedia
												className='card-img'
												image={require('../images/webImg.jpg?webp')}
												title='Web Design'
											/>
											<CardContent>
												<Typography gutterBottom variant='h5' component='h2'>
													Web Design
												</Typography>
												<Typography
													variant='body2'
													color='textSecondary'
													component='p'
												>
													Services include business applications,
													WordPress&#8482; development.
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>
							)}
						</Spring>
					)}
				</VisibilitySensor>
			</Grid>
			<Grid item xs={12} md={6} className='card-item_container'>
				<VisibilitySensor partialVisibility once>
					{({ isVisible }) => (
						<Spring
							delay={300}
							to={{
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? 'translateX(0)' : 'translateX(100%)'
							}}
						>
							{(props) => (
								<div style={{ ...props }}>
									<Card className='cards'>
										<CardActionArea>
											<CardMedia
												className='card-img'
												image={require('../images/videoImg.png?webp')}
												title='Videography'
											/>
											<CardContent>
												<Typography gutterBottom variant='h5' component='h2'>
													Videography
												</Typography>
												<Typography
													variant='body2'
													color='textSecondary'
													component='p'
												>
													Action videography, Aerial, promos
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>
							)}
						</Spring>
					)}
				</VisibilitySensor>
			</Grid>
		</Grid>
	)
}
