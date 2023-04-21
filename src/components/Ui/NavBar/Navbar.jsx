import Link from 'next/link';
import React from 'react';

const Navbar = ({ className, onClick }) => {
	return (
		<>
			<Link
				href="/"
				aria-label="link instalador"
				className={className}
				onClick={onClick}
			>
				Instalador
			</Link>
			<Link
				href="/equipe"
				aria-label="link equipe"
				className={className}
				onClick={onClick}
			>
				Equipe
			</Link>
			<Link
				href="/projetos"
				aria-label="link projetos"
				className={className}
				onClick={onClick}
			>
				Projetos
			</Link>
		</>
	);
};

export default Navbar;
