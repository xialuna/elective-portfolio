import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

export const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			{/* SPOTLIGHT*/}
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>

				<Spotlight
					className="top-10 left-full h=[80vh] w-[50vw]"
					fill="purple"
				/>

				<Spotlight className="top-28 left-13 h-[80vh] w-[50vw]" fill="purple" />
			</div>

			{/* GRID */}
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-white/[0.01] flex items-center justify-center absolute top-0 left-0">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			{/* HEADER */}
			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="uppercase tracking-widest text-xs text] flex--center text-white max-w-80">
						ELECT IT-E1 Portfolio | PUP-Manila
					</h2>

					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
						words="Hi, I'm Xian Hui Cheng"
					/>

					<p className="text-center md-tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						I&apos;m a Software Developer focused on building user-focused
						interfaces
					</p>

					<a href="#about">
						<MagicButton title="Explore Portfolio" />
					</a>
				</div>
			</div>
		</div>
	);
};
