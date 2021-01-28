import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../layouts/MainLayout'
import { motion } from 'framer-motion'
import '../styles/style.scss'

function MyApp({ Component, pageProps, router }) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<title>Guest Media | Software Development & Videography</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<Layout>
				<motion.div
					key={router.route}
					initial='pageInitial'
					animate='pageAnimate'
					variants={{
						pageInitial: {
							opacity: 0
						},
						pageAnimate: {
							opacity: 1
						}
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</Layout>
		</>
	)
}

export default MyApp
