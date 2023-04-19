import Link from 'next/link';

const TabConfig = () => {
	return (
		<div>
			<div className={''}>
				<h2>Integrações</h2>

				<button>
					<span></span> Conectar
				</button>
				<button>
					<span></span> Desconectar
				</button>
			</div>
			<div className={''}>
				<h2>Privacidade</h2>
				<div className={''}>
					<input id="check" type="checkbox" />
					<label htmlFor="check">Exibir meu usuário no ranque</label>
				</div>
			</div>
		</div>
	);
};

export default TabConfig;
