import { RateCard } from './components/rateCard/RateCard';
import { ThankyouCard } from './components/thankyouCard/ThankyouCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/rateContext';
import './App.css';

function App() {
	return (
		<>
			<ContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<RateCard />} />
						<Route path='/thank-you' element={<ThankyouCard />} />
						<Route path='*' element={<h2>NOT FOUND</h2>} />
					</Routes>
				</BrowserRouter>
			</ContextProvider>
		</>
	);
}

export default App;

SPA;
