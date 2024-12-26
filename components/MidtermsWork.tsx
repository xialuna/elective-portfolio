"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
const MidtermsWork = () => {
	return (
		<>
			<div className="py-20">
				<div className="relative">
					<h2 className="text-2xl text-center">Assignments</h2>
				</div>

				<div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
					<Card title="Munni is Aditi">
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-purple-500"
							colors={[[130, 86, 241]]}
						/>
					</Card>
					<Card title="Nisha is Munni">
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-black"
							colors={[[130, 86, 241]]}
							dotSize={2}
						/>
						{/* Radial gradient for the cute fade */}
						<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
					</Card>
					<Card title="Munni is Aditi">
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
	children,
}: {
	title: string;
	children?: React.ReactNode;
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
				<h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
					{title}
				</h2>
			</div>
		</div>
	);
};
