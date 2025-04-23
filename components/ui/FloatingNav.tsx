"use client";
import React, { useEffect, useRef, useState } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const { scrollY } = useScroll();
	const [visible, setVisible] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const lastScrollY = useRef(0);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const current = latest;
		const direction = current - lastScrollY.current;

		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		if (direction > 0) setVisible(false);
		if (direction < 0) setVisible(true);

		timeoutRef.current = setTimeout(() => setVisible(true), 200);
		lastScrollY.current = current;
	});

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 1, y: -100 }}
				animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
				transition={{ duration: 0.2 }}
				className={cn(
					"fixed z-[5000] inset-x-0 top-4 sm:top-10 mx-auto",
					className
				)}
			>
				<div className="flex items-center justify-between px-6 py-3 sm:px-8 sm:py-2 rounded-full bg-white dark:bg-black-100 shadow-md border border-transparent dark:border-white/20 max-w-fit mx-auto">
					{/* Desktop Menu */}
					<div className="hidden sm:flex space-x-4 items-center">
						{navItems.map((navItem, idx) => (
							<Link
								key={`link-${idx}`}
								href={navItem.link}
								className="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-yellow-300 transition-colors"
							>
								{navItem.icon && <span>{navItem.icon}</span>}
								<span>{navItem.name}</span>
							</Link>
						))}
					</div>

					<div className="sm:hidden flex items-center">
						<button
							onClick={() => setMenuOpen((prev) => !prev)}
							aria-label="Toggle Menu"
						>
							{menuOpen ? <HiOutlineX /> : "View Menu"}
						</button>
					</div>
				</div>

				{/* Mobile Dropdown */}
				<AnimatePresence>
					{menuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="sm:hidden mt-2 bg-white dark:bg-black-100 rounded-lg shadow-lg px-6 py-4 w-fit mx-auto space-y-3 border border-neutral-200 dark:border-white/20"
						>
							{navItems.map((navItem, idx) => (
								<Link
									key={`mobile-link-${idx}`}
									href={navItem.link}
									className="flex items-center space-x-2 text-neutral-700 dark:text-white hover:text-neutral-500 dark:hover:text-yellow-300 transition-colors"
									onClick={() => setMenuOpen(false)}
								>
									{navItem.icon && <span>{navItem.icon}</span>}
									<span>{navItem.name}</span>
								</Link>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</AnimatePresence>
	);
};
