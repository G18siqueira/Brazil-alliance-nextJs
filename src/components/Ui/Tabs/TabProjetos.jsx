const TabProjetos = ({ projects }) => {
	return (
		<div>
			{projects.map(
				({ id, title, translated, approved, voted, tags }) => (
					<div key={id} className={''}>
						<h3>{title}</h3>
						<p>
							Textos Traduzidos: <span>{translated}</span>
						</p>
						<p>
							Textos Aprovados: <span>{approved}</span>
						</p>
						<p>
							Textos Votados: <span>{voted}</span>
						</p>
						<div className={''}>
							{tags.map((tag) => (
								<span key={tag} className={`${tag}`}>
									{tag}
								</span>
							))}
						</div>
					</div>
				),
			)}
		</div>
	);
};

export default TabProjetos;
