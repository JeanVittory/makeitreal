import { RateCard } from './components/rateCard/RateCard';
import { ThankyouCard } from './components/thankyouCard/ThankyouCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/rateContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
			<ToastContainer />
		</>
	);
}

export default App;
