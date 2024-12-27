import { Hero } from "@/components/Hero";
import React from "react";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Finals() {
	return (
		<main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero
					heading="Finals Compilation"
					subHeading="This contains all quizzes, acivities, final exam, and reflection during our finals period."
					tertiaryHeading="Second Term"
					buttonTitle="View Compilation"
				/>
			</div>
		</main>
	);
}
