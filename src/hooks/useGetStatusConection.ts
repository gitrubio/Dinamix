import React, { useState } from 'react';
import { TStatusConection } from '../interfaces/auth.interfaces';

const useGetStatusConection = () => {
	const [statusConection, setStatusConection] =
		useState<TStatusConection>('initial');
	window.addEventListener('online', function (e) {
		setStatusConection('conection');
	});

	// Attaching event handler for the offline event
	window.addEventListener('offline', function (e) {
		setStatusConection('not-conection');
	});

	return {
		statusConection,
	};
};

export default useGetStatusConection;
