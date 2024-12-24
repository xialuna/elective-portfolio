import CourseWork from "@/components/CourseWork";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
	return (
		<main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav
					navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
				/>
				<Hero
					tertiaryHeading="ELECT IT-E1 Portfolio | PUP-Manila"
					heading="Hi, I'm Xian Cheng"
					subHeading="I'm a Software Developer focused on building user-focused interfaces"
					buttonTitle="Explore Portfolio"
				/>
				<CourseWork />
			</div>
		</main>
	);
}
