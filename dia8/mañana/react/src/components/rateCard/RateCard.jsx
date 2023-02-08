import star from '../../assets/icon-star.svg';
import css from './rateCard.module.css';
import { Link } from 'react-router-dom';
import { useRateContext } from '../../context/rateContext';
import { useState } from 'react';

export const RateCard = () => {
	const [selectionUser, setSelectionUser] = useState('');
	const { setQualification } = useRateContext();

	const handleSelectionUser = (e) => {
		setSelectionUser(e.target.firstChild.nodeValue);
	};

	const handleSubmit = () => {
		setQualification(selectionUser);
	};

	return (
		<main className={css.card}>
			<header className={css.header}>
				<div className={css.containerStar}>
					<img src={star} alt='star' className={css.containerStar__img} />
				</div>
			</header>
			<section className={css.containerInfo}>
				<h3 className={css.containerInfo__title}>How did we do?</h3>
				<p className={css.containerInfo__paragraph}>
					Please let us know how we did with your support request. All feedback is appreciated to help us
					improve our offering!
				</p>
			</section>
			<section className={css.containerQualification}>
				<div tabIndex={'0'} className={css.containerQualification__item} onClick={handleSelectionUser}>
					<div className={css.item}>1</div>
				</div>
				<div tabIndex={'0'} className={css.containerQualification__item} onClick={handleSelectionUser}>
					<div className={css.item}>2</div>
				</div>
				<div tabIndex={'0'} className={css.containerQualification__item} onClick={handleSelectionUser}>
					<div className={css.item}>3</div>
				</div>
				<div tabIndex={'0'} className={css.containerQualification__item} onClick={handleSelectionUser}>
					<div className={css.item}>4</div>
				</div>
				<div tabIndex={'0'} className={css.containerQualification__item} onClick={handleSelectionUser}>
					<div className={css.item}>5</div>
				</div>
			</section>
			<div className={css.submit} onClick={handleSubmit}>
				<Link to={'/thank-you'} className={css.link}>
					SUBMIT
				</Link>
			</div>
		</main>
	);
};
