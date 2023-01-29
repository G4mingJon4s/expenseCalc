import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Oxygen_Mono } from "@next/font/google";

export const mainFont = Oxygen_Mono({
	weight: "400",
	subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
	return <div className={mainFont.className}><Component {...pageProps} /></div>;
}
