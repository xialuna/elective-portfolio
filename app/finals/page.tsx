import { Hero } from "@/components/Hero";
import React from "react";

export default function Finals() {
	return (
		<main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<Hero
					heading="Finals Compilation"
					subHeading="This contains all quizzes, acivities, final exam, and reflection during our finals period."
					tertiaryHeading="2nd Term"
				/>
			</div>
		</main>
	);
}
