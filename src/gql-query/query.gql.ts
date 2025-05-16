const gql = String.raw;

export const Invoice_Query = gql`
	query Invoice($invoiceId: String) {
		invoice(invoiceId: $invoiceId) {
			_id
			uid
			paymentDisbursementStatus
			paymentDisbursementChannel
			rider {
				riderId
				serialNumber
				name
				contactNumber
				address
				email
			}
			items {
				date
				riderFare
				deliveryId
				deliveryUID
			}
			incomeAmount
			disbursedAmount
			createdAt
			updatedAt
		}
	}
`;
