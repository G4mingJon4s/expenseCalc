import React, { useMemo } from "react";
import styles from "@/styles/Description.module.css";
import { numberToMoney } from "@/helpers/number";
import DynamicIcon from "./DynamicIcon";
import { Expense } from "@/types/expense";

interface Props {
	data: Expense[];
}

export default function Description({ data }: Props) {
	const shown = useMemo(() => {
		const sorted = data.sort((a, b) => Math.abs(b.total) - Math.abs(a.total));
		if (sorted.length < 7) return sorted;
		const chosen = sorted.slice(0, 6);
		const other: Expense = {
			iconName: "HiArchive",
			name: "Others",
			id: "000111122",
			items: [...sorted.slice(6).map((exp, id) => ({
				id: `${id}-expense-${exp.name}-grouped`,
				name: exp.name,
				total: exp.total
			}))],
			total: sorted.slice(6).reduce((acc, cur) => acc + cur.total, 0)
		};
		return [...chosen, other];
	}, [data]);

	return (
		<div className={styles["container"]}>
			{shown.map((obj, index) => <Card key={`desc${index}-${obj.name}`} iconName={obj.iconName} name={obj.name} price={obj.total}/>)}
		</div>
	);
}

interface CardProps {
	iconName: string;
	name: string;
	price: number;
}

export function Card({ iconName: iconName, name, price }: CardProps) {
	const iconJSX = DynamicIcon({
		iconName,
		props: {
			size: 40
		}
	});
	const negative = price < 0;
	return (
		<div className={`${styles["card"]} ${styles[negative ? "red" : "green"]}`}>
			<div className={styles["icon"]}>{iconJSX}</div>
			<div className={styles["name"]}>{name}</div>
			<div className={styles["price"]}>{numberToMoney(price)}</div>
		</div>
	);
}
