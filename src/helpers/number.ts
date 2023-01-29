export function numberToMoney(num: number) {
	return (num < 0 ? "" : "+") + num.toFixed(2) + "€";
}