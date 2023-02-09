import star from '../../assets/icon-star.svg';
import css from './rateCard.module.css';
import { Link } from 'react-router-dom';
import { useRateContext } from '../../context/rateContext';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const RateCard = () => {
	// const [selectionUser, setSelectionUser] = useState(0);
	const { qualification, setQualification } = useRateContext();
	const qualifications = [1, 2, 3, 4, 5];
	const navigate = useNavigate();

	const handleSelectionUser = (e) => {
		setQualification(+e.target.firstChild.nodeValue);
	};

	useEffect(() => {
		setQualification(0);
		const resetSelectionUser = () => setQualification(0);
		window.addEventListener('click', (e) => {
			if (e.target.nodeName !== 'A') resetSelectionUser();
		});
		return () => window.removeEventListener('click', resetSelectionUser);
	}, []);

	const handleSubmit = (e) => {
		if (!qualification) {
			return toast.error('You should select a rate');
		}
		navigate('thank-you');
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
			<ul className={css.containerQualification}>
				{qualifications.map((item) => {
					return (
						<li
							key={item}
							tabIndex={'0'}
							className={css.containerQualification__item}
							onClick={handleSelectionUser}
						>
							<a className={css.item}>{item}</a>
						</li>
					);
				})}
			</ul>
			<div className={css.submit} onClick={handleSubmit}>
				<Link className={css.link}>SUBMIT</Link>
			</div>
		</main>
	);
};
