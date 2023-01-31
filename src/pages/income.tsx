import MonthModal from "@/components/MonthModal";
import NavigationBar from "@/components/NavigationBar";
import React, { useCallback, useState } from "react";
import styles from "@/styles/Income.module.css";

interface Props {
	months: {
		name: string;
		remaining: number;
	}[];
	expenses: {
		icon: string;
		name: string;
		price: number;
	}[];
}

export default function Home({ months, expenses }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);
	const toggleModal = useCallback(() => setIsModalOpen(val => !val), [setIsModalOpen]);

	const [chosenMonth, setChosenMonth] = useState(months[0].name);
	const changeMonth = useCallback<(month: string) => void>(month => setChosenMonth(month), [setChosenMonth]);
	
	return (
		<>
			<MonthModal isOpen={isModalOpen} onClose={closeModal} changeMonth={changeMonth} months={months} chosen={chosenMonth}/>
			<NavigationBar currentMonth={chosenMonth} monthIsNegative={(months.find(o => o.name === chosenMonth)?.remaining ?? 0) < 0} toggleMonthModal={toggleModal}/>
		</>
	);
}

export function getServerSideProps() {
	return {
		props: {
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "December 2023"].map(s => ({ name: s,
				remaining: Math.random() * 1000 * (Math.random() > 0.5 ? 1 : -1) })),
			expenses: [{
				icon: "HiHome",
				name: "Home",
				price: -500
			},{
				icon: "HiLightningBolt",
				name: "Power",
				price: -1000
			},{
				icon: "HiCloud",
				name: "Gas",
				price: -430
			},{
				icon: "HiShoppingCart",
				name: "Food",
				price: -120
			},{
				icon: "HiTrendingUp",
				name: "Stocks",
				price: -403
			},{
				icon: "HiReceiptTax",
				name: "Subscriptions",
				price: -1203
			},{
				icon: "HiShoppingCart",
				name: "Shopping",
				price: -500
			},{
				icon: "HiHome",
				name: "Rent",
				price: -400
			}]
		}
	};
}