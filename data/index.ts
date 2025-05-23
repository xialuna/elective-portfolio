import midterms from "./midterms.json";

export const navItems = [
	{ name: "Home", link: "/" },
	{ name: "Midterms", link: "/midterms" },
	{ name: "Finals", link: "/finals" },
	{ name: "Contact", link: "#contact" },
];

export const coursework = [
	{
		id: 1,
		title: "Midterms",
		des: "This contains all assignments, activities, reflection, and exam during our midterm period.",
		period: "1st term",
		link: "/midterms",
	},
	{
		id: 2,
		title: "Finals",
		des: "This contains all quizzes, acivities, final exam, and reflection during our finals period.",
		period: "2nd term",
		link: "/finals",
	},
];

export { midterms };
