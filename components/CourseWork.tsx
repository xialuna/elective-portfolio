import { coursework } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { CardSpotlight } from "./ui/CardSpotlight";

const CourseWork = () => {
	return (
		<div className="py-20">
			<h1 className="heading">
				A showcase of my <span className="text-wrappurple">coursework</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{coursework.map(({ id, title, des, img, iconLists, link }) => (
					<div
						key={id}
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
					>
						<PinContainer>
							<CardSpotlight>{title}</CardSpotlight>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseWork;
