import Grid from '@material-ui/core/Grid'

export default function About() {
	return (
		<div className='frosted'>
			<Grid container spacing={1} className='about-container'>
				<Grid item xs={12} md={6}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						convallis ligula pulvinar mauris lacinia, dapibus convallis velit
						cursus. Pellentesque egestas hendrerit suscipit. Cras ultricies in
						felis in porttitor. Proin accumsan auctor odio ut venenatis. Nulla
						rhoncus nibh sed lorem accumsan ultricies. Donec quam nulla, euismod
						ut mauris eu, vulputate facilisis magna. Donec ornare risus nec
						sodales hendrerit. Nam lorem dui, facilisis vel dui vel, egestas
						commodo leo. Cras tincidunt et erat et maximus. Aenean vulputate
						augue maximus urna placerat commodo. Fusce nec nulla ex.
					</p>
				</Grid>
				<Grid item xs={12} md={6} className='about-img_container orange'>
					<img
						src={require('../images/porsche.jpg?webp')}
						alt='Porsche placeholder img'
					/>
				</Grid>
			</Grid>
			<Grid container spacing={1} className='about-container'>
				<Grid item xs={12} md={6} className='about-img_container black'>
					<img
						src={require('../images/ktm.jpg?webp')}
						alt='ktm placeholder img'
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<p>
						Phasellus iaculis ex aligula. Nulla facilisi. Praesent enim nulla,
						tincidunt ac metus id, consequat sodales dui. Ut vel velit
						vestibulum, auctor nibh at, commodo dui. Sed egestas enim nec velit
						feugiat, at venenatis erat porttitor. Nullam ornare, ligula sed
						scelerisque venenatis, sem orci rutrum neque, vitae suscipit urna
						quam at purus. Sed vestibulum, ante vel rhoncus dapibus, nisi sapien
						volutpat sem, quis posuere ante urna id odio. Maecenas in neque quis
						lorem ultricies consectetur id non diam. Aenean eleifend accumsan
						quam, vitae lacinia felis elementum vitae. Nam suscipit orci ut nibh
						convallis, id ullamcorper massa dapibus.
					</p>
				</Grid>
			</Grid>
		</div>
	)
}
