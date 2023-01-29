import React from "react";
import styles from "@/styles/NavigationBar.module.css";
import { HiCalendar } from "react-icons/hi";

interface Props {
	currentMonth: string;
	toggleMonthModal: () => void;
}

export default function NavigationBar({ currentMonth, toggleMonthModal }: Props) {
	return (
		<nav className={styles["container"]}>
			<Month currentMonth={currentMonth} toggleMonthModal={toggleMonthModal}/>
			<ul className={styles["links"]}>
				<li className={styles["item"]}><a href="" className={styles["link"]}>Overview</a></li>
				<li className={styles["item"]}><a href="#expenses" className={styles["link"]}>Expenses</a></li>
				<li className={styles["item"]}><a href="#subscriptions" className={styles["link"]}>Subscriptions</a></li>
			</ul>
		</nav>
	);
}

interface MonthProps {
	currentMonth: string;
	toggleMonthModal: () => void;
}

export function Month({ currentMonth, toggleMonthModal }: MonthProps) {
	return (
		<div className={styles["month-container"]}>
			<button className={styles["change-month"]} onClick={toggleMonthModal}>
				<HiCalendar size={24}/>
				<span className={styles["month-text"]}>{currentMonth}</span>
			</button>
		</div>
	);
}
