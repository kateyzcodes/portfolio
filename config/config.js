
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Katelyn",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Katelyn",
	description: "A third-year Information Systems student at Carnegie Mellon University",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1ASOcKGCbs1-spmVYL_xyPy3AvOs-MhQXwNvJl23Oxsc/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a third-year Information Systems major with a concentration in Data Analytics and a minor in Social and Political History.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
		"When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Software Development",
			description: "I apply SWE principles and programming knowledge to solve real-world problems.",
			icons: null,
		},
		{
			title: "Machine Learning and Data Analysis",
			description: "I solve problems through machine learning and data analysis.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "HASH",
			description: "A startup in its infancy but is being actively worked on with hopes to launch in May! Further details to come.",
			icons: null,
			// icons: [
				// {
				// 	icon: faAppStore,
				// 	link: "https://docs.google.com/document/d/1qTRv73iMPIcw75h56K2cd0rSJPk3dSdiIxpkFvvKVDA/edit?usp=sharing",
				// },
				// {
				// 	icon: faGithub,
				// 	link: "https://github.com/hashirshoaeb/star_book",
				// },
			// ]
		},
		{
			title: "CMUlator",
			description: "A slice of life simulation game developed with the goal of giving incoming students a virtual experience of Carnegie Mellon. Incorporates objected-oriented programming and pathfinding algorithms.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/kateyzcodes/cmulator",
				},
			]
		},
		{
			title: "OpenTable Database Project",
			description: "A term project that works through the entire lifecycle of the database design and development process. Please contact me for access to the repository!",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/kateyzcodes/67262-database-term-project",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at katelynz@andrew.cmu.edu.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:katelynz@andrew.cmu.edu",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Katelyn Zheng | Software Engineering Student | Fullstack Developer | Data Analytics",
	description: "I am a third year Information Systems student at Carnegie Mellon University.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@katelynzheng",
	description: "Software Engineering Student | Fullstack Developer | Data Analytics",
	cards: [
		{
			title: "My website",
			link: "https://kateyzcodes.github.io/portfolio/",
		},
		{
			title: "CMUlator",
			link: "https://github.com/kateyzcodes/cmulator",
		},
		{
			title: "OpenTable Database Project",
			link: "https://github.com/kateyzcodes/67262-database-term-project",
		},
		{
			title: "My GitHub",
			link: "https://github.com/kateyzcodes/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/katelyn-zheng/",
		},
	]
}