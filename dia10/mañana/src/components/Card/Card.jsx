import hero from '../../assets/illustration-hero.svg';
import iconMusic from '../../assets/icon-music.svg';
import './card.css';

export const Card = () => {
	return (
		<main className='card'>
			<header className='cardHeader'>
				<img className='cardHeader__img' src={hero} alt='Hero' />
			</header>
			<section className='card-info'>
				<article className='card-info-container'>
					<h2 className='card-info-container__title'>Order Summary</h2>
					<p className='card-info-container__paragraph'>
						You can now listen to millions of songs, audiobooks, and podcast, on any device anywhere you
						like!
					</p>
				</article>
				<article className='card-data-info'>
					<img className='card-data-info__img' src={iconMusic} alt='icon music' />
					<div>
						<p className='card-data-info__plan'>Annual Plan</p>
						<p className='card-data-info__price'>$59.99/year</p>
					</div>
					<a href='#' className='card-data-info__change'>
						Change
					</a>
				</article>
				<section className='card-button-container'>
					<button className='card-button-container__payment'>Proceed to Payment</button>
					<button className='card-button-container__cancel'>Cancel Order</button>
				</section>
			</section>
		</main>
	);
};
