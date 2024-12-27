"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { HoverBorderGradient } from "./ui/HoverBorder";
const MidtermsWork = () => {
	return (
		<>
			<div className="w-full py-20">
				<div className="relative">
					<h2 className="text-3xl text-center">Assignments</h2>
				</div>

				<div className="py-20 flex flex-col lg:flex-row items-center justify-center dark:bg-black-100 w-full gap-4 mx-auto px-8">
					<Card
						title="Munni is Aditi"
						icon={<FrontLabel label="Assignment 1" />}
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-purple-500"
							colors={[[130, 86, 241]]}
						/>
					</Card>
					<Card
						title="Nisha is Munni"
						icon={<FrontLabel label="Assignment 1" />}
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-black"
							colors={[[130, 86, 241]]}
							dotSize={2}
						/>
						{/* Radial gradient for the cute fade */}
						<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
					</Card>
					<Card
						title="Munni is Aditi"
						icon={<FrontLabel label="Assignment 1" />}
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-purple-500"
							colors={[[130, 86, 241]]}
						/>
					</Card>
				</div>
			</div>
		</>
	);
};

export default MidtermsWork;

const Card = ({
	title,
	icon,
	children,
	reflection,
}: {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
	reflection: string;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border rounded-lg border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem]"
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20">
				<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full min-w-40  mx-auto flex items-center justify-center">
					{icon}
				</div>
				<h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-1 transition duration-200  text-center">
					Lorem ipsum irut doren lorem desum dolor
				</h2>
			</div>
		</div>
	);
};

const FrontLabel = ({ label }: { label: string }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<HoverBorderGradient className="bg-black-100 text-sm">
				{label}
			</HoverBorderGradient>
			<h2 className="text-xl">
				Using Built-in Functions and Control Structures
			</h2>
			<p className="text-sm text-gray-300">04-19-2022</p>
		</div>
	);
};
