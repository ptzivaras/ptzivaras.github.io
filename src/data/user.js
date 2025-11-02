const INFO = {
	main: {
		title: "React Project by Panagiotis",
		name: "P. Tzivaras",
		email: "@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/ptzivaras",
		linkedin: "https://www.linkedin.com/in/ptzivaras/",
	},

	homepage: {
		title: "Full-stack developer building web applications and services.",
		description:
			"In my free time, I have worked on personal projects, freelance projects, and volunteered at Future Generation. I am looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Panagiotis Tzivaras. I live in Greece, where I enjoy my life and build my career.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are full-stack and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest improvements. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			title: "PayrollSystem",
			description:
				"A Payroll System using React (UI), Spring Boot (API), and PostgreSQL. Clean 3-layer architecture, migrations, and tests.",
			// primary icon (shown if your UI only uses `logo`)
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			// full stack
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spring.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/PayrollSystem",
		},
		{
			title: "NetShop",
			description:
				".NET e-shop with Razor Views (UI), ASP.NET Identity, and MySQL. Separate Spring+React version with JWT in progress.",
			// Razor Views UI (no React here per your note)
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/NetShop",
		},
		{
			title: "BestBuy",
			description:
				"React (UI) + Spring Boot (API) with JWT and PostgreSQL. Modular 3-layer design.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spring.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/BestBuy",
		},
		{
			title: "SpringShop",
			description:
				"React (UI) + Spring backend. Researching RTK Query vs TanStack Query for API calls.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spring.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/SpringShop",
		},
		{
			title: "OnlineShop",
			description:
				"React UI sandbox for layouts/components; open-ended learning project.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/OnlineShop",
		},
		{
			title: "Efoodie",
			description:
				"React-based food delivery UI with mock REST and responsive design.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/yummyfoodie",
		},
		{
			title: "Other Projects",
			description:
				"Node.js weather API and ASP.NET Core performance tests on large datasets using MySQL indexes.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
			],
			linkText: "View Projects",
			link: "https://github.com/",
		},
		{
			title: "StealAllTheCats_V2",
			description:
				".NET (EF Core, code-first) console app fetching cat data from an API; Dockerized.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/StealAllTheCats_V2",
		},
		{
			title: "Gym_Member_Management",
			description:
				"React (UI) + Spring Boot (API) + PostgreSQL. Memberships, payments, trainers, dashboards.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spring.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/Gym_Member_Management",
		},
		{
			title: "Thesis (Computational Geometry)",
			description:
				"C++ implementation for the Art Gallery problem (triangulation + graph theory).",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/Thesis",
		},
		{
			title: "EuroDataAnalysis",
			description:
				"Data transformation and schema design with Python + PostgreSQL.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/EuroDataAnalysis",
		},
		{
			title: "my-gym (React)",
			description:
				"Frontend-only gym demo in React: trainer programs and schedules.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/my-gym",
		},
	],
};

export default INFO;
