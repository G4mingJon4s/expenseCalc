import Description from "@/components/Description";
import Details from "@/components/Details";
import ExpenseGraph from "@/components/ExpenseGraph";
import MonthModal from "@/components/MonthModal";
import NavigationBar from "@/components/NavigationBar";
import styles from "@/styles/Index.module.css";
import { useCallback, useState } from "react";
import { expenseData } from "./api/expense";
import { Expense } from "@/types/expense";

export const title = "Expense Calculator";

interface Props {
	months: {
		name: string;
		remaining: number;
	}[];
	expenses: Expense[];
}

export default function Home({ months, expenses }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);
	const toggleModal = useCallback(() => setIsModalOpen(val => !val), [setIsModalOpen]);

	const [chosenMonth, setChosenMonth] = useState(months[0].name);
	const changeMonth = useCallback<(month: string) => void>(month => setChosenMonth(month), [setChosenMonth]);

	return (
		<>
			<MonthModal isOpen={isModalOpen} months={months} chosen={chosenMonth} onClose={closeModal} changeMonth={changeMonth}/>
			<div className={styles["container"]}>
				<div className={styles["navbar"]}>
					<NavigationBar currentMonth={chosenMonth} monthIsNegative={(months.find(o => o.name === chosenMonth)?.remaining ?? 0) < 0} toggleMonthModal={toggleModal}/>
				</div>
				<div className={styles["description"]}>
					<Description data={expenses}/>
				</div>
				<div className={styles["graph"]}>
					<ExpenseGraph />
				</div>
				<div className={styles["details"]}>
					<Details expenses={expenses.reduce((acc, cur) => acc + cur.total, 0)} income={2340}/>
				</div>
			</div>
		</>
	);
}

export function getServerSideProps() {
	const fetchedData = expenseData;

	return {
		props: {
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "December 2023"].map(s => ({ name: s,
				remaining: Math.random() * 1000 * (Math.random() > 0.5 ? 1 : -1) })),
			expenses: fetchedData
		}
	};
}