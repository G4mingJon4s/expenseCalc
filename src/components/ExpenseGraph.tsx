import React from "react";
import styles from "@/styles/ExpenseGraph.module.css";
import { ResponsiveBar } from "@nivo/bar";

const data = [
	{
		"type": "Home",
		"cost": 38
	},
	{
		"type": "Power",
		"cost": 70
	},
	{
		"type": "Gas",
		"cost": 40
	}
];

export default function ExpenseGraph() {
	return (
		<div className={styles["graph-wrapper"]}>
			<ResponsiveBar
				data={data}
				keys={[
					"cost",
				]}
				theme={{
					textColor: "#ffffff",
					fontSize: 22,
					tooltip: {
						container: {
							background: "#555"
						}
					},
					legends: {
						text: {
							fontSize: 22
						},
						title: {
							text: {
								fontSize: 22
							}
						}
					},
					axis: {
						legend: {
							text: {
								fontSize: 22
							}
						}
					}
				}}
				indexBy="type"
				margin={{ top: 50,
					right: 50,
					bottom: 50,
					left: 60 }}
				padding={0.2}
				colors={["#ff6666"]}
				colorBy="id"
				borderColor={{
					from: "color",
					modifiers: [["darker", 3]]
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
				}}
				axisLeft={{
					tickSize: 0,
					tickPadding: 10,
					tickRotation: 0,
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{
					from: "color",
					modifiers: [["darker", 3]]
				}}
			/>
		</div>
	);
}
