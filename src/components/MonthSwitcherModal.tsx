import React from "react";
import Modal from "react-modal";
import styles from "@/styles/MonthModal.module.css";
import { Oxygen_Mono } from "@next/font/google";

export const mainFont = Oxygen_Mono({
	weight: "400",
	subsets: ["latin"]
});

interface Props {
  isOpen: boolean;
	months: {
		name: string;
		remaining: number;
	}[];
	chosen: string;
  onClose: () => void;
	changeMonth: (month: string) => void;
}

Modal.setAppElement("#__next");

export default function MonthSwitcherModal({ isOpen, months, chosen, onClose, changeMonth }: Props) {

	return <Modal
		isOpen={isOpen}
		onRequestClose={onClose}
		className={styles["modal"]}
		overlayClassName={styles["overlay"]}
	>
		<div className={mainFont.className}>
			<div className={styles["modal-content"]}>
				<h2>Available Months</h2>
				<div className={styles["grid-container"]}>
					{months.map((month, index) => (
						<div key={index} className={styles["grid-item"]}>
							<MonthCard month={month.name} changeMonth={changeMonth} isChosen={chosen === month.name} isNegative={month.remaining < 0}/>
						</div>
					))}
				</div>
				<button onClick={onClose} className={styles["close-modal"]}>Close</button>
			</div>
		</div>
	</Modal>;
}

interface MonthCardProps {
	month: string;
	isChosen: boolean;
	isNegative: boolean;
	changeMonth: (month: string) => void;
}

export function MonthCard({ month, isChosen, isNegative, changeMonth }: MonthCardProps) {
	return (
		<>
			<button className={`${styles["card"]} ${styles[isNegative ? "red" : "green"]}`} onClick={() => changeMonth(month)} disabled={isChosen}>
				<p>{month}</p>
			</button>
		</>
	);
}