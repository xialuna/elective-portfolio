import { coursework } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { CardSpotlight } from "./ui/CardSpotlight";
import { HoverBorderGradient } from "./ui/HoverBorder";

const CourseWork = () => {
	return (
		<div className="py-20">
			<h1 className="heading">
				A showcase of my <span className="text-wrap purple">coursework</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 sm:gap-1">
				{coursework.map(({ id, title, des, period, link }) => (
					<div
						key={id}
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
					>
						<PinContainer>
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
