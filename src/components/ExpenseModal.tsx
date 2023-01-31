import React from "react";
import Modal from "react-modal";
import styles from "@/styles/ExpenseModal.module.css";
import { Card } from "./Description";
import { Oxygen_Mono } from "@next/font/google";
import { Expense } from "@/types/expense";

export const mainFont = Oxygen_Mono({
	weight: "400",
	subsets: ["latin"]
});

Modal.setAppElement("#__next");

interface Props {
	isOpen: boolean;
	onClose: () => void;
	expense: Expense;
}

export default function ExpenseModal({ isOpen, onClose, expense }: Props) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className={styles["modal"]}
			overlayClassName={styles["overlay"]}
		>
			<div className={mainFont.className}>
				<div className={styles["container"]}>
					<Card iconName={expense.iconName} name={expense.name} price={expense.total}/>
				</div>
			</div>
		</Modal>
	);
}
