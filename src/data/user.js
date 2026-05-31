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
				"Used 3-layer architecture, Flyway migrations, Stored Procedure for payroll calculation and secure REST APIs, Axios, TanStack Query for data fetching, caching, and paginations...",
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
			featured: true,
			description:
				"Full-stack e-commerce platform built with ASP.NET Core 8 (API + MVC), Entity Framework Core, and SQL Server. Features 3-layer architecture, ASP.NET Identity with Admin/Customer roles, shopping cart, orders, wishlist, product reviews, admin dashboard with Chart.js, background stock alerts, rate limiting, repository & service patterns, and full unit + integration test coverage.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/NetShop",
		},
		{
			title: "JShop (SpringShop version 2)",
			featured: true,
			description:
				"Full-stack e-commerce platform built with Spring Boot (REST API) and React + Vite (SPA). Features JWT authentication with Spring Security, Stripe payment integration, PostgreSQL, shopping cart, order tracking, wishlist, product reviews, discount/coupon system, address management, and a full admin dashboard for products, orders, and discounts.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spring.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/JShop",
		},
		{
			title: "SpringShop",
			description:
				"Full-stack e-commerce app with React (UI) and Spring Boot (API). Uses both RTK Query (Redux Toolkit) and TanStack Query for API calls, JWT authentication with Spring Security, and admin product management.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spring.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/SpringShop",
		},
{
			title: "Efoodie",
			description:
				"React-based food delivery UI with mock REST and responsive design(Todo).",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/yummyfoodie",
		},
		{
			title: "Other Projects",
			description:
				"A collection of smaller experiments and learning projects — including a Node.js weather API, ASP.NET Core performance tests, and more. Check my GitHub for the full list.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
			],
			linkText: "View Projects",
			link: "https://github.com/ptzivaras?tab=repositories",
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
			title: "Gym Member Management",
			featured: true,
			description:
				"Gym Admin Application.. built for administrators to manage customer profiles, memberships, payments, trainers, and class schedules. The application includes a dashboard for visualizing gym data and supports features like viewing class schedules by day/time and managing. Memberships, payments, trainers, dashboards.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spring.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/Gym_Member_Management",
			demoLink: "https://gymmembermanagement.vercel.app",
			demoText: "Live Demo",
		},
		{
			title: "Thesis (Computational Geometry)",
			description:
				"C++ implementation for Algorithm to check MaxKernel in Orthogonal Polygon.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/Thesis",
		},
		{
			title: "EuroDataAnalysis",
			description:
				"Data transformation and schema design with Python & SQL.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/EuroDataAnalysis",
		},
		{
			title: "my-gym (Next.js)",
			featured: true,
			description:
				"Gym website built with Next.js 15. Includes membership plans, trainer profiles, class schedules, BMI calculator, gallery, FAQ, contact form, dark/light mode, and basic SEO.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/my-gym",
			demoLink: "https://my-gym-xi.vercel.app/",
			demoText: "Live Demo",
		},
		{
			title: "BookStore",
			description:
				"React book catalog with search, filters, favorites (persists in localStorage), dark/light themes, and toasts. Uses Context API, custom hooks, Tailwind UI, mock API data, and Vite.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/BookStore",
			demoLink: "https://book-store-six-liart.vercel.app",
			demoText: "Live Demo",
		},
		{
			title: "YouFlow",
			featured: true,
			description:
				"Full-stack business booking platform built entirely in TypeScript. Businesses register services and availability slots; clients make reservations. React 19 + Vite + Tailwind CSS (frontend), Node.js + Express + raw PostgreSQL with Controller-Service-Repository architecture (backend), JWT auth, Helmet, Morgan, and Jest + Supertest tests.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/YouFlow",
		},
		{
			title: "Appointment Booking System",
			featured: true,
			description:
				"Full-stack appointment booking app with role-based access (Doctor / Patient). Doctors manage available slots; patients book appointments and track status (Pending, Completed, Cancelled). Built with React 19 + Vite (frontend), Node.js + Express 5 + Prisma ORM + PostgreSQL (backend), JWT authentication, bcrypt, and Docker.",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prisma.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/appointment-booking-system",
		},
		{
			title: "Nexus AI — Agent Assistant",
			featured: true,
			description:
				"AI-powered support ticket management platform. Uses LLM integration (Groq llama-3.1 + OpenAI fallback) with structured outputs, sentiment analysis, automatic classification, urgency scoring, and confidence metrics. Features multi-provider LLM orchestration, AI safety guardrails, token usage tracking, prompt versioning, business rule overrides, and graceful degradation. Built with FastAPI + Python + SQLAlchemy + Pydantic (backend) and React 18 (frontend).",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
			logos: [
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
				"https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/AI-Agent-Assistant",
		},
		{
			title: "AI Assistant",
			description:
				"AI-powered assistant application with interactive chat interface and intelligent responses. AI Assistant that helps Customers via Chat Messages. It has limitations with Gemini's free tier API versions. (OpenAI key may be expired and not working)",
			logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
			logos: ["https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"],
			linkText: "View Project",
			link: "https://github.com/ptzivaras/AI_Assistant",
			demoLink: "https://aiassistant-three-pi.vercel.app",
			demoText: "Live Demo",
		},
	],
};

export default INFO;
