import Head from 'next/head'
import Hero from '../components/Hero'
import Why from '../components/Why'
import Cards from '../components/Cards'

export default function Home() {
	return (
		<>
			<Head>
				<title>Guest Media | Software Development & Videography</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />
			<Why />
			<Cards />
		</>
	)
}
