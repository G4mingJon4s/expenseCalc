import React, { useMemo } from "react";
import styles from "@/styles/Description.module.css";
import { HiArchive } from "react-icons/hi";
import { IconType } from "react-icons";
import { numberToMoney } from "@/helpers/number";

interface Props {
	data: {
		icon: IconType;
		name: string;
		price: number;
	}[];
}

export default function Description({ data }: Props) {
	const shown = useMemo(() => {
		const sorted = data.sort((a, b) => Math.abs(b.price) - Math.abs(a.price));
		if (sorted.length < 7) return sorted;
		const chosen = sorted.slice(0, 6);
		const other = {
			icon: HiArchive,
			name: "Others",
			price: sorted.slice(6).reduce((acc, cur) => acc + cur.price, 0)
		};
		return [...chosen, other];
	}, [data]);

	return (
		<div className={styles["container"]}>
			{shown.map((obj, index) => <Card key={`desc${index}-${obj.name}`} iconFunction={obj.icon} name={obj.name} price={obj.price}/>)}
		</div>
	);
}

interface CardProps {
	iconFunction: IconType;
	name: string;
	price: number;
}

export function Card({ iconFunction, name, price }: CardProps) {
	const iconJSX = iconFunction({ size: 40 });
	const negative = price < 0;
	return (
		<div className={`${styles["card"]} ${styles[negative ? "red" : "green"]}`}>
			<div className={styles["icon"]}>{iconJSX}</div>
			<div className={styles["name"]}>{name}</div>
			<div className={styles["price"]}>{numberToMoney(price)}</div>
		</div>
	);
}
