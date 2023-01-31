export interface Expense {
	name: string;
	id: string;
	iconName: string;
	total: number;
	items: Entry[];
}

export interface Entry {
	name: string;
	id: string;
	total: number;
}
