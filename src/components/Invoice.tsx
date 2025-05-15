const Invoice = () => {
	const summary = [
		{ time: '01/04/2024 | 12:52', orderId: '25625258', income: 72.25 },
		{ time: '01/04/2024 | 08:40', orderId: '25625258', income: 112.2 },
		{ time: '01/04/2024 | 16:20', orderId: '25625258', income: 96.32 },
		{ time: '01/04/2024 | 18:11', orderId: '25625258', income: 85.32 },
		{ time: '01/04/2024 | 20:55', orderId: '25625258', income: 55.55 },
		{ time: '01/04/2024 | 20:58', orderId: '25625258', income: 28.36 },
	];

	const total = summary.reduce((acc, curr) => acc + curr.income, 0).toFixed(2);

	return (
		<div className='lg:w-8/12 mx-auto bg-white shadow-md border-t-10 border-t-amber-500 rounded-md p-6 md:p-10 text-sm'>
			<img src='/logo.png' width={150} height={150} />
			<h2 className='text-orange-600 font-semibold text-lg mb-6'>
				Your daily earning summary, Fariha Chowdhury
			</h2>

			<div className='flex flex-col md:flex-row justify-between text-gray-800 mb-6 space-y-4 md:space-y-0'>
				<div>
					<p className='font-semibold'>Pay to</p>
					<p>Fariha Chowdhury</p>
					<p>
						Rider ID: <span className='font-medium'>2368758</span>
					</p>
					<p>Address: Banani, Dhaka 1212, Bangladesh</p>
					<p>
						Phone: <span className='font-medium'>+88 01258754362</span>
					</p>
					<p>Email: farihachowdhury@gmail.com</p>
				</div>
				<div className='text-right md:text-left'>
					<p className='font-semibold'>Invoice details</p>
					<p>
						Invoice number: <span className='font-medium'>14523658</span>
					</p>
					<p>
						Invoice Date: <span className='font-medium'>27/04/2025</span>
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
							{summary.map((item, idx) => (
								<tr key={idx} className='border-b last:border-b-0'>
									<td className='py-2 px-4'>{item.time}</td>
									<td className='py-2 px-4'>{item.orderId}</td>
									<td className='py-2 px-4'>৳ {item.income.toFixed(2)}</td>
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
