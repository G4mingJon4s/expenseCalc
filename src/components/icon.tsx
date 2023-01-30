import dynamic from "next/dynamic";
import { useMemo } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface Props {
	iconName: string;
	props: IconBaseProps;
}

export default function DynamicIcon({ iconName, props }: Props) {
	const iconFunction = useMemo(() => dynamic(() => import("react-icons/hi").then(m => m[iconName as never])), [iconName]) as IconType;
	return iconFunction(props);
}