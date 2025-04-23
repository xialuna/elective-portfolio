"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import { Mail, MapPin, UserRound } from "lucide-react";

export default function CardImage() {
	return (
		<CardContainer className="inter-var">
			<CardBody className="border border-yellow-100/20 w-[350px] h-[450px] rounded-2xl p-4 shadow-md flex items-center justify-center flex-col hover:shadow-[0_0_30px_10px_rgba(255,227,134,0.6)]">
				<CardItem translateZ="30" className="w-full flex justify-center">
					<Image
						src="/cropped-pic.png"
						alt="Xian's picture"
						width={400}
						height={300}
						className="object-cover rounded-md"
					/>
				</CardItem>

				<CardItem
					translateZ="40"
					className="mt-6 ml-4 text-lg font-semibold self-start"
				>
					Xian Hui Cheng{" "}
					<span className="text-sm font-normal text-gray-400">- She/her</span>
				</CardItem>
				<CardItem
					translateZ="30"
					className="self-start mt-4 ml-4 text-sm text-yellow-100/80 flex flex-col gap-2"
				>
					<div className="flex items-center gap-2">
						<MapPin size={18} />
						<span>Philippines</span>
					</div>
					<div className="flex items-center gap-2">
						<UserRound size={18} />
						<span>20 years old</span>
					</div>
					<div className="flex items-center gap-2">
						<Mail size={18} /> <span>xianhuicheng01@gmail.com</span>
					</div>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}
