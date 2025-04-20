"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { HoverBorderGradient } from "./ui/HoverBorder";
import { X } from "lucide-react";

const MidtermsWork = ({
	data,
	title,
	subHeading,
}: {
	data: any[];
	title: string;
	subHeading: string;
}) => {
	const [items, setItems] = useState(data);
	const [selectedItem, setSelectedItem] = useState<any | null>(null);

	return (
		<>
			<div className="w-full py-20">
				<div className="relative text-center">
					<h2 className="text-4xl mb-4 font-semibold">{title}</h2>
					<p>{subHeading}</p>
				</div>

				<div
					className={`py-11 grid items-center justify-center dark:bg-black-100 w-full gap-4 mx-auto px-8 ${
						items.length === 2 ? "grid-cols-2" : "grid-cols-1 lg:grid-cols-3"
					}`}
				>
					{items.map((item) => (
						<Card
							key={item.id}
							frontContent={
								<FrontLabel
									label={item.label}
									title={item.title}
									date={item.date}
								/>
							}
							reflection={item.reflection}
							onClick={() => {
								setSelectedItem(item);
							}}
						>
							<CanvasRevealEffect
								animationSpeed={3}
								containerClassName="bg-yellow-100-500"
								colors={[[130, 86, 241]]}
							/>
						</Card>
					))}
				</div>
			</div>
			{/* PDF Popup */}
			{selectedItem && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-black-100 p-3 pt-12 w-3/4 h-3/4 relative rounded-lg ">
						<p className="absolute top-2 left-2 p-2">{`${selectedItem.label}: ${selectedItem.title}`}</p>
						<button
							className="absolute top-2 right-2 text-white p-2 rounded"
							onClick={() => setSelectedItem(null)}
						>
							<X size={24} />
						</button>
						<iframe
							src={selectedItem.link}
							className="w-full h-full"
							title="PDF Viewer"
						></iframe>
					</div>
				</div>
			)}
		</>
	);
};

export default MidtermsWork;

const Card = ({
	frontContent,
	children,
	reflection,
	onClick,
}: {
	frontContent: React.ReactNode;
	children?: React.ReactNode;
	reflection: string;
	onClick: () => void;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={onClick}
			className="border rounded-lg border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  w-full mx-auto p-4 relative h-[20rem]"
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
					{frontContent}
				</div>
				<div className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-1 transition duration-200  text-center">
					<span className="border border-white rounded-2xl px-4 py-1">
						Reflection
					</span>
					<h2 className="pt-5">{reflection}</h2>
				</div>
			</div>
		</div>
	);
};

const FrontLabel = ({
	label,
	title,
	date,
}: {
	label: string;
	title: string;
	date: string;
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-6">
			<HoverBorderGradient className="bg-black-100 text-sm">
				{label}
			</HoverBorderGradient>
			<div>
				<h2
					className={`font-semibold mb-2 ${
						title.trim().split(" ").length <= 2 ? "text-3xl" : "text-2xl"
					}`}
				>
					{title}
				</h2>
				<p className="text-sm text-gray-300">{date}</p>
			</div>
		</div>
	);
};
