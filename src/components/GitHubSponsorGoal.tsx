import { ReactNode, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import Spinner from "./Spinner";

/**
 * The 2 different types of GitHub sponsorship goals.
 */
type SponsorshipType = "MONTHLY_SPONSORSHIP_AMOUNT" | "TOTAL_SPONSORS_COUNT";

/**
 * The GitHub sponsorship result data.
 */
type SponsorshipGoalData = {
	/**
	 * The title of the goal.
	 */
	title: string,

	/**
	 * The description of the sponsorship goal.
	 */
	description: string,

	/**
	 * The type of sponsorship goal.
	 */
	kind: SponsorshipType,

	/**
	 * The target value in either total monthly sponsorships or total financial sponsorship amount.
	 */
	targetValue: number,

	/**
	 * The whole number percentage of completion to the goal.
	 */
	percentComplete: number,
};

/**
 * The GitHub sponsorship progress component.
 * @returns The component.
 */
export default function GitHubSponsorGoal(): ReactNode {
	const [sponsorData, setSponsorData] = useState<SponsorshipGoalData | null>(null);

	const currentAmountRaised = sponsorData === null
		? 0
		: sponsorData.kind === "MONTHLY_SPONSORSHIP_AMOUNT"
			? (sponsorData.percentComplete / 100) * (sponsorData.targetValue)
			: ((sponsorData.percentComplete / 100) * sponsorData.targetValue);

	useEffect(() => {
		getSponsorshipData().then((data) => {
			setSponsorData(data);
		});

		return () => {
			setSponsorData(null);
		}
	}, []);

	const currentProgressText = sponsorData === null
		? ""
		: sponsorData.kind === "MONTHLY_SPONSORSHIP_AMOUNT"
			? `$${currentAmountRaised.toLocaleString()} Raised`
			: `${currentAmountRaised.toLocaleString()} Monthly Sponsors`

	const goalText = sponsorData === null
		? ""
		: sponsorData.kind === "MONTHLY_SPONSORSHIP_AMOUNT"
			? `Goal: $${sponsorData.targetValue.toLocaleString()}`
			: `Goal: ${sponsorData.targetValue.toLocaleString()} Total Sponsors`

	const raisedAndGoal = (
		<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
			<span>{currentProgressText}</span>
			<span>{goalText}</span>
		</div>
	);

	return (
		<>
			{sponsorData === null
				? <Spinner />
				: <div style={{ margin: "1rem 0" }}>
					{raisedAndGoal}

					<ProgressBar value={sponsorData.percentComplete} filledBarColor="#E94BA8" />

					<div style={{ marginTop: "0.25rem", fontSize: "0.9rem", color: "#555" }}>
						{sponsorData.percentComplete.toFixed(0)}% of goal
					</div>
				</div>
			}
		</>
	);
}

/**
 * Gets the GitHub sponsorship data.
 * @returns The GitHub sponsorship data.
 */
async function getSponsorshipData(): Promise<SponsorshipGoalData | null> {
	const url = "https://sponsor-goals.kinsondigital.workers.dev/github-sponsor-goal";

	try {
		const response = await fetch(url, {
			method: "GET",
			cache: "no-cache"
		});

		if (!response.ok) {
			const errorMsg = `Fetch Sponsorship Goal Error: ${response.status} - ${response.statusText}`;
			console.error(errorMsg);

			const result = getSponsorShipBackup();

			if (result === null) {
				return null;
			}

			return JSON.parse(result);
		}

		const data = await response.json();

		saveSponsorshipData(data);

		return data;
	} catch (error) {
		console.error(error);

		const result = getSponsorShipBackup();

		if (result === null) {
			return null;
		}

		return JSON.parse(result);
	}
}

/**
 * Gets the sponsorship goal data from local storage.
 * @returns The sponsorship goal data.
 */
function getSponsorShipBackup(): string | null {
	return localStorage.getItem("github-sponsorship-goal");
}

/**
 * Saves the sponsorship {@link data} to local storage.
 * @param data Date data to save.
 */
function saveSponsorshipData(data: SponsorshipGoalData): void {
	localStorage.setItem("github-sponsorship-goal", JSON.stringify(data));
}
