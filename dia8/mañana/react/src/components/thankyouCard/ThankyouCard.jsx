import headerImage from '../../assets/illustration-thank-you.svg';
import { useRateContext } from '../../context/rateContext';
import css from './thankyou.module.css';

export const ThankyouCard = () => {
	const { qualification } = useRateContext();

	return (
		<main className={`${css.card}`}>
			<div className={css.imageContainer}>
				<img className={css.card__image} src={headerImage} alt='Good Bye Image' />
			</div>
			<p className={css.card__resume}>{`You selected ${qualification} of 5`}</p>
			<section className={css.card__finalMessage}>
				<h2 className={css.card__thankYou}>Thank you!</h2>
				<p className={css.card__message}>
					We appreciate you taking the time to give a rating. If you ever need more support, dont't
					hesitate to get in touch!
				</p>
			</section>
		</main>
	);
};
