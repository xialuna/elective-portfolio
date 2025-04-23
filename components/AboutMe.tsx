import Image from "next/image";
import React from "react";
import CardImage from "./ui/CardImage";

const AboutMe = () => {
	return (
		<div className="py-16 relative container mx-auto" id="about-me">
			<div className="flex justify-center items-center ">
				<div className="flex-1 space-y-3 ">
					<h2 className="sub-heading text-yellow-300 font-bold">About Me</h2>
					<p>
						I’m a 3rd year BSIT student at PUP-Manila with a passion for tech,
						leadership, and community. I currently the{" "}
						<span className="text-yellow-200">Chapter lead of GDG-PUP</span> and
						work as a
						<span className="text-yellow-200"> Software Developer at CFL </span>
						and{" "}
						<span className="text-yellow-200">
							Freelance Full-stack Developer at Nuworks
						</span>
						, building real-world solutions. <br />
						<br />
						Previously, I served as Web Dev Co-head and UI/UX Lead for AWSCC
						PUP-Manila, honing both my design and development skills. I’ve also
						been part of award-winning teams, including Champion at GDSC
						Hackfest 2024 and 1st Runner-Up at the PhilDev TechUp Innovation
						Challenge.
					</p>
				</div>
				<div className="flex-1 flex justify-center">
					<CardImage />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
