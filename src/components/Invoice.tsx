import { IInvoice } from '@/types/invoiceTypes';
import { FC } from 'react';

const Invoice: FC<{ invoice: IInvoice }> = ({ invoice }) => {
	const total = invoice?.items
		?.reduce((acc, curr) => acc + curr.riderFare, 0)
		.toFixed(2);

	return (
		<div className='lg:w-8/12 mx-auto bg-white shadow-md border-t-10 border-t-amber-500 rounded-md p-6 md:p-10 text-sm'>
			<img src='/logo.png' width={150} height={150} />
			<h2 className='text-orange-600 font-semibold text-lg mb-6'>
				Your daily earning summary, {invoice?.rider?.name}
			</h2>

			<div className='flex flex-col md:flex-row justify-between text-gray-800 mb-6 space-y-4 md:space-y-0'>
				<div>
					<p className='font-semibold'>Pay to</p>
					<p>{invoice?.rider?.name || 'N/A'}</p>
					<p>
						Rider ID:{' '}
						<span className='font-medium'>
							{invoice?.rider?.serialNumber || 'N/A'}
						</span>
					</p>
					<p>Address: {invoice?.rider?.address || 'N/A'}</p>
					<p>
						Phone:{' '}
						<span className='font-medium'>
							{invoice?.rider?.contactNumber || 'N/A'}
						</span>
					</p>
					<p>Email: {invoice?.rider?.email || 'N/A'}</p>
				</div>
				<div className='text-right md:text-left'>
					<p className='font-semibold'>Invoice details</p>
					<p>
						Invoice number:{' '}
						<span className='font-medium'>{invoice?.uid || 'N/A'}</span>
					</p>
					<p>
						Invoice Date:{' '}
						<span className='font-medium'>
							{formatDate(invoice?.createdAt)}
						</span>
					</p>
				</div>
			</div>

			<div className='border-t border-gray-200 pt-4'>
				<h3 className='text-lg font-semibold mb-3'>Earning summary</h3>
				<div className='overflow-x-auto'>
					<table className='min-w-full table-auto text-left'>
						<thead className='bg-gray-100 text-gray-700'>
							<tr>
								<th className='py-2 px-4'>Date & time</th>
								<th className='py-2 px-4'>Order ID</th>
								<th className='py-2 px-4'>Income</th>
							</tr>
						</thead>
						<tbody>
							{invoice?.items?.map((item, idx) => (
								<tr key={idx} className='border-b last:border-b-0'>
									<td className='py-2 px-4'>{formatDate(item?.date)}</td>
									<td className='py-2 px-4'>{item?.deliveryUID}</td>
									<td className='py-2 px-4'>৳ {item?.riderFare?.toFixed(2)}</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr className='font-semibold'>
								<td className='py-2 px-4' colSpan={2}>
									Total
								</td>
								<td className='py-2 px-4'>৳ {total}</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Invoice;

const formatDate = (date: string, locale: string = 'en-BD') => {
	if (!date) {
		return '';
	}

	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		// hour: "2-digit",
		// minute: "2-digit",
		// second: "2-digit",
		// hour12: true,
	}).format(new Date(date));
};
