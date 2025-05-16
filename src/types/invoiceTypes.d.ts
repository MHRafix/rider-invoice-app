export interface IInvoice {
	_id: string;
	uid: string;
	paymentDisbursementStatus: string;
	paymentDisbursementChannel: string;
	rider: Rider;
	items: Item[];
	incomeAmount: number;
	disbursedAmount: number;
	createdAt: string;
	updatedAt: string;
}

export interface Item {
	date: string;
	riderFare: number;
	deliveryId: string;
	deliveryUID: string;
}

export interface Rider {
	riderId: string;
	serialNumber: null;
	name: string;
	contactNumber: string;
	address: string;
	email: null;
}
