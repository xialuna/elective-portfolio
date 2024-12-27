import { Hero } from "@/components/Hero";
import MidtermsWork from "@/components/MidtermsWork";
import React from "react";
import midtermsData from "@/data/midterms.json";

export default function Midterms() {
	return (
		<main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<Hero
					heading="Midterms Compilation"
					subHeading="This contains all assignments, activities, reflection, and exam
						during our midterm period."
					tertiaryHeading="First Term"
					buttonTitle="View Compilation"
				/>

				<MidtermsWork
					data={midtermsData.assignments}
					title="Assignments"
					subHeading="A collection of assignments showcasing my progress and learning
						journey."
				/>
				<MidtermsWork
					data={midtermsData.activities}
					title="Activities"
					subHeading="Collaborative and individual activities showcasing applied learning."
				/>
			</div>
		</main>
	);
}
