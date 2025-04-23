import { Hero } from "@/components/Hero";
import MidtermsWork from "@/components/MidtermsWork";
import React from "react";
import midtermsData from "@/data/midterms.json";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Midterms() {
	return (
		<div className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero
					heading="Midterms Compilation"
					subHeading="This contains all assignments, activities, reflection, and exam
						during our midterm period."
					tertiaryHeading="First Term"
					buttonTitle="View Compilation"
					redirect="midterms-works"
				/>
				<main id="midterms-works">
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
					<MidtermsWork
						data={midtermsData.quizzes}
						title="Quizzes"
						subHeading="Quizzes that test my understanding of the course material."
					/>
				</main>
			</div>
		</div>
	);
}
