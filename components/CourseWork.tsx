import { coursework } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { CardSpotlight } from "./ui/CardSpotlight";
import { HoverBorderGradient } from "./ui/HoverBorder";
import { TypewriterEffect } from "./ui/TypeWriterEffect";

const CourseWork = () => {
	const words = [
		{
			text: "A",
		},
		{
			text: "showcase",
		},
		{
			text: "of",
		},
		{
			text: "my",
		},
		{
			text: "courseworks",
			className: "text-yellow-100",
		},
	];
	return (
		<div className="py-20">
			<div className="relative">
				<TypewriterEffect words={words} />
			</div>

			{/* CARDS */}
			<div className="flex flex-wrap items-center justify-center gap-20 sm:gap-4 -m-5">
				{coursework.map(({ id, title, des, period, link }) => (
					<div
						key={id}
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
					>
						<PinContainer title="Explore" href={link}>
							<CardSpotlight className="w-96">
								<div className="flex flex-col gap-4 ">
									<p className="text-3xl font-bold relative z-20 mt-2">
										{title}
									</p>
									<p>{des}</p>
									<div className="flex justify-end">
										<HoverBorderGradient>{period}</HoverBorderGradient>
									</div>
								</div>
							</CardSpotlight>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseWork;
