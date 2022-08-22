import { FC } from 'react'

import styles from './Layout.module.scss'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navigation } from './navigation/Navigation'

const Layout: FC = ({ children }: any) => {
	return (
		<div className={styles.layout}>
			<Header />
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Footer />
		</div>
	)
}

export { Layout }
