import React from "react";
import styles from "@/styles/NavigationBar.module.css";

interface Props {
	title: string;
	currentMonth: string;
	toggleMonthModal: () => void;
}

export default function NavigationBar({ title, currentMonth, toggleMonthModal }: Props) {
	return (
		<nav className={styles["navbar"]}>
			<h1>{title}</h1>
			<div className={styles["navbar-center"]}>
				<span className={styles["navbar-center-text"]}>{currentMonth}</span>
			</div>
			<ul className={styles["navbar-links"]}>
				<li className={styles["navbar-link-item"]}><a href="" className={styles["navbar-link"]}>Overview</a></li>
				<li className={styles["navbar-link-item"]}><a href="#expenses" className={styles["navbar-link"]}>Expenses</a></li>
				<li className={styles["navbar-link-item"]}><a href="#subscriptions" className={styles["navbar-link"]}>Subscriptions</a></li>
				<li className={styles["navbar-link-item"]}><button className={styles["navbar-month-button"]} onClick={toggleMonthModal}>Change Month</button></li>
			</ul>
		</nav>
	);
}
