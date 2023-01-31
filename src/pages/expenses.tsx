import MonthModal from "@/components/MonthModal";
import NavigationBar from "@/components/NavigationBar";
import React, { useCallback, useState } from "react";
import styles from "@/styles/Expenses.module.css";
import ExpenseModal from "@/components/ExpenseModal";
import { Card } from "@/components/Description";
import { Expense } from "@/types/expense";
import { expenseData } from "@/pages/api/expense";

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

	const [isExpenseOpen, setIsExpenseOpen] = useState(false);
	const openExpenseModal = () => setIsExpenseOpen(true);
	const closeExpenseModal = () => setIsExpenseOpen(false);
	const toggleExpenseModal = () => setIsExpenseOpen(val => !val);

	const [chosenExpense, setChosenExpense] = useState(0);

	const onCardClick = (ind: number) => () => {
		if (chosenExpense === ind) return toggleExpenseModal();
		setChosenExpense(ind);
		openExpenseModal();
	};
	
	return (
		<>
			<MonthModal isOpen={isModalOpen} onClose={closeModal} changeMonth={changeMonth} months={months} chosen={chosenMonth}/>
			<ExpenseModal isOpen={isExpenseOpen} onClose={closeExpenseModal} expense={expenses[chosenExpense]}/>
			<div className={styles["container"]}>
				<NavigationBar currentMonth={chosenMonth} monthIsNegative={(months.find(o => o.name === chosenMonth)?.remaining ?? 0) < 0} toggleMonthModal={toggleModal}/>
				<div className={styles["grid"]}>
					{expenses.map((obj, ind) =>
						<button className={styles["card-button"]} onClick={onCardClick(ind)}>
							<Card key={`${ind}-desc-${obj.name}`} iconName={obj.iconName} name={obj.name} price={obj.total}/>
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const fetchedData = expenseData;

	return {
		props: {
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "December 2023"].map(s => ({ name: s,
				remaining: Math.random() * 1000 * (Math.random() > 0.5 ? 1 : -1) })),
			expenses: fetchedData,
		}
	};
}