import React from "react";

const icons = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/xiancheng/",
		svg: (
			<path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.1h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.55 2.5 4.55 5.75V24h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.95-2.9 3.95V24h-4V8z" />
		),
	},
	{
		name: "GitHub",
		url: "https://github.com/xialuna",
		svg: (
			<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.19.69-3.87-1.54-3.87-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 2.86-.38c.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.07 0 4.38-2.69 5.34-5.26 5.62.42.36.77 1.08.77 2.18 0 1.57-.02 2.84-.02 3.23 0 .3.21.66.79.55C20.22 21.38 24 17.05 24 12 24 5.73 18.77.5 12 .5z" />
		),
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/xiann_c/",
		svg: (
			<path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
		),
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/xianhui.cheng.3/",
		svg: (
			<path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.49V14.708h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.62h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
		),
	},
];

const Footer = () => {
	return (
		<div className="flex py-7 px-14 border-t border-yellow-100/10">
			<div className="flex-1 container space-y-5">
				<span className="sub-heading text-yellow-200 font-semibold">
					Connect
				</span>
				<p className="text-lg">xianhuicheng01@gmail.com</p>
			</div>
			<div className="flex-1 space-y-5">
				<span className="sub-heading text-yellow-200 font-semibold">
					Follow
				</span>
				<div className="flex gap-4">
					{icons.map(({ name, svg, url }, index) => (
						<a
							key={index}
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 border border-yellow-100/30 rounded-full hover:bg-yellow-200 hover:text-black transition-colors"
							aria-label={name}
							title={name}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								{svg}
							</svg>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
