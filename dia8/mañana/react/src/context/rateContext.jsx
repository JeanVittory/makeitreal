import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const RateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [qualification, setQualification] = useState(0);
	console.log('context', qualification);
	return (
		<RateContext.Provider value={{ qualification, setQualification }}>
			{children}
		</RateContext.Provider>
	);
};

export const useRateContext = () => {
	const context = useContext(RateContext);
	return context;
};
