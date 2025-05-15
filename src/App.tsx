import { useSearchParams } from 'react-router-dom';
import Invoice from './components/Invoice';

const App = () => {
	const [searchParams] = useSearchParams();
	const invoiceId = searchParams.get('invoiceId');

	return (
		<div>
			<div className='container w-full h-screen mx-auto flex items-center justify-center'>
				{invoiceId ? (
					<Invoice />
				) : (
					<div>
						<p className='text-2xl text-red-500 font-semibold'>
							Sorry, Invoice not found!
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
