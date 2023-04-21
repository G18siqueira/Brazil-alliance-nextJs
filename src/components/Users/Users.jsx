import Image from 'next/image';
import styles from './users.module.scss';

const Users = ({
	imageSrc,
	src,
	alt,
	width,
	height,
	spanName,
	name,
	offices,
	text,
}) => {
	return (
		<div className={styles['user']}>
			<div className={styles['image']}>
				{imageSrc ? (
					<Image src={src} alt={alt} width={width} height={height} />
				) : (
					<span>{spanName}</span>
				)}
			</div>
			<div className={styles['infos']}>
				<h2 className={`tit`}>{name}</h2>
				<h3>{offices}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Users;
