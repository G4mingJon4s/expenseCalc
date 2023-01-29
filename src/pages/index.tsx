import Description from "@/components/Description";
import Details from "@/components/Details";
import ExpenseGraph from "@/components/ExpenseGraph";
import MonthSwitcherModal from "@/components/MonthSwitcherModal";
import NavigationBar from "@/components/NavigationBar";
import styles from "@/styles/Home.module.css";
import { useCallback, useState } from "react";
import { HiHome, HiLightningBolt, HiCloud, HiShoppingCart, HiTrendingUp, HiReceiptTax } from "react-icons/hi";

export const title = "Expense Calculator";

const testData = [{
	icon: HiHome,
	name: "Home",
	price: -500
},{
	icon: HiLightningBolt,
	name: "Power",
	price: -1000
},{
	icon: HiCloud,
	name: "Gas",
	price: -430
},{
	icon: HiShoppingCart,
	name: "Food",
	price: -120
},{
	icon: HiTrendingUp,
	name: "Stocks",
	price: -403
},{
	icon: HiReceiptTax,
	name: "Subscriptions",
	price: -1203
},{
	icon: HiShoppingCart,
	name: "Shopping",
	price: -500
},{
	icon: HiHome,
	name: "Rent",
	price: -400
}];

interface Props {
	months: string[];
}

export default function Home({ months }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);
	const toggleModal = useCallback(() => setIsModalOpen(val => !val), [setIsModalOpen]);

	const [chosenMonth, setChosenMonth] = useState(months[0]);
	const changeMonth = useCallback<(month: string) => void>(month => setChosenMonth(month), [setChosenMonth]);

	return (
		<>
			<MonthSwitcherModal isOpen={isModalOpen} months={months} chosen={chosenMonth} onClose={closeModal} changeMonth={changeMonth}/>
			<div className={styles["container"]}>
				<div className={styles["navbar"]}>
					<NavigationBar title={title} currentMonth={chosenMonth} toggleMonthModal={toggleModal}/>
				</div>
				<div className={styles["description"]}>
					<Description data={testData}/>
				</div>
				<div className={styles["graph"]}>
					<ExpenseGraph />
				</div>
				<div className={styles["details"]}>
					<Details expenses={923} income={2340}/>
				</div>
			</div>
		</>
	);
}

export function getServerSideProps() {
	return {
		props: {
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		}
	};
}