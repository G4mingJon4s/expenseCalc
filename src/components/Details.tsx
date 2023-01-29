import React from "react";
import styles from "@/styles/Details.module.css";
import { HiDatabase, HiCreditCard, HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { IconType } from "react-icons";
import { numberToMoney } from "@/helpers/number";

interface Props {
	expenses: number;
	income: number;
}

export default function Details({ expenses, income }: Props) {
	const remaining = income - expenses;

	return (
		<div className={styles["container"]}>
			<Card iconFunction={HiDatabase} price={income} name="Income" />
			<Card iconFunction={HiCreditCard} price={-expenses} name="Expenses" />
			<Card iconFunction={remaining > 0 ? HiTrendingUp : HiTrendingDown} price={remaining} name="Remaining" />
		</div>
	);
}

interface CardProps {
	iconFunction: IconType;
	name: string;
	price: number;
}

export function Card({ iconFunction, name, price }: CardProps) {
	const iconJSX = iconFunction({ size: 60 });
	const negative = price < 0;
	return (
		<>
			<div className={`${styles["card"]} ${styles[negative ? "red" : "green"]}`}>
				<div className={styles["icon"]}>{iconJSX}</div>
				<div className={styles["name"]}>{name}</div>
				<div className={styles["price"]}>{numberToMoney(price)}</div>
			</div>
		</>
	);
}
