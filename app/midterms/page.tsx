import { Hero } from "@/components/Hero";
import MidtermsWork from "@/components/MidtermsWork";
import React from "react";

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

				<MidtermsWork />
			</div>
		</main>
	);
}
