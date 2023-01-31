// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Expense } from "@/types/expense";
import type { NextApiRequest, NextApiResponse } from "next";

export const expenseData: Expense[] = [{
	name: "Home",
	iconName: "HiHome",
	id: "012345",
	items: [{
		name: "Rent",
		id: "012346",
		total: -653
	},{
		name: "Power",
		id: "012347",
		total: -875
	},{
		name: "Furniture",
		id: "012348",
		total: -1203
	}],
	total: -2731
},{
	name: "Shopping",
	iconName: "HiShoppingCart",
	id: "01234567",
	items: [{
		id: "1231231",
		name: "Food",
		total: -1231
	}],
	total: -1231
},{
	name: "Power",
	iconName: "HiLightningBolt",
	id: "1231432",
	items: [{
		name: "main",
		id: "12334244",
		total: -4534
	}],
	total: -4534
},{
	name: "Subscriptions",
	iconName: "HiReceiptTax",
	id: "94734",
	items: [{
		id: "58855",
		name: "netflix",
		total: -300
	},{
		id: "87855",
		name: "disney+",
		total: -495
	}],
	total: -795
},{
	name: "Gas",
	iconName: "HiFire",
	id: "948757",
	items: [{
		id: "5774",
		name: "main",
		total: -102
	}],
	total: -102
},{
	id: "345324423",
	name: "Transactions",
	iconName: "HiCreditCard",
	items: [{
		name: "susy",
		id: "7493",
		total: 3743
	},{
		name: "liam",
		id: "7545",
		total: 2000
	}],
	total: 5743
},{
	id: "759433",
	name: "Refunds",
	iconName: "HiPrinter",
	items: [{
		id: "857",
		name: "amazon",
		total: 940
	}],
	total: 940
}];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Expense[]>
) {
	res.status(200).json(expenseData);
}