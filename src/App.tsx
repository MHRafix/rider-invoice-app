import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Invoice from './components/Invoice';
import { Invoice_Query } from './gql-query/query.gql';
import { gqlRequest } from './lib/api-client';
import { IInvoice } from './types/invoiceTypes';

const App = () => {
	const [searchParams] = useSearchParams();
	const invoiceId = searchParams.get('invoiceId');

	const { data, isLoading } = useQuery({
		queryKey: [`invoice-${invoiceId}`],
		queryFn: () =>
			gqlRequest<{
				invoice: IInvoice;
			}>({
				query: Invoice_Query,
				variables: {
					invoiceId: invoiceId,
				},
			}),
	});

	return (
		<div>
			<div className='container w-full h-screen mx-auto flex items-center justify-center'>
				{isLoading ? (
					<Loader2 className='animate-spin text-orange-500' size={30} />
				) : (
					<>
						<>
							{invoiceId && data?.invoice ? (
								<Invoice invoice={data?.invoice!} />
							) : (
								<div>
									<p className='text-2xl text-red-500 font-semibold'>
										Sorry, Invoice not found!
									</p>
								</div>
							)}
						</>
					</>
				)}
			</div>
		</div>
	);
};

export default App;
