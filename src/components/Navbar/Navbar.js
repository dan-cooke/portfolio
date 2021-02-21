import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import './Navbar.scss'
const Navbar = () => {
	const { pathname } = useLocation()

	return (
		<ul className='navbar'>
			<li>
				<Link to='/' className={pathname === '/' && 'selected'}>
					Projects
				</Link>
			</li>
			<li>
				<Link
					to='/resume'
					className={pathname.includes('resume') && 'selected'}
				>
					Resume
				</Link>
			</li>
			<li>
				<Link
					to='/contact'
					className={pathname.includes('contact') && 'selected'}
				>
					Contact
				</Link>
			</li>
		</ul>
	)
}

export default Navbar
