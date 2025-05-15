import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
		</Router>
	</StrictMode>
);
