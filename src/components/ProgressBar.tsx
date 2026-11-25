import { ReactNode } from "react";

/**
 * The properties for the {@link ProgressBar} component.
 */
interface Params {
	/**
	 * The current value of the progress.
	 */
	value: number,

	/**
	 * The minimum value of the progress.
	 */
	valueMin?: number,

	/**
	 * The maximum value of the progress.
	 */
	valueMax?: number,

	/**
	 * The color of the progress bar that is filled.
	 */
	filledBarColor?: string,

	/**
	 * The color of the progress bar that is not filled.
	 */
	unfilledBarColor?: string,
}

/**
 * Displays a progress bar.
 * @param props The properties of the {@link ProgressBar} component.
 * @returns The component.
 */
export default function ProgressBar(props: Params): ReactNode {
	const { value, valueMin = 0, valueMax = 100, filledBarColor = "#e0e0e0", unfilledBarColor = "#38383B" } = props;

	const percentage = Math.min((value / valueMax) * 100, valueMax);

	return (
		<div style={{ margin: "1rem 0" }}>
			<div style={{ background: "#38383B", borderRadius: "4px", height: "16px", overflow: "hidden" }}>
				<div
					style={{
						width: `${percentage}%`,
						background: filledBarColor,
						height: "100%",
						transition: "width 0.5s ease",
					}}
				/>
			</div>
		</div>
	);
}