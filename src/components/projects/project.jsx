import React from "react";
// project links open externally so they can point to GitHub or other sites
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, logos, title, description, linkText, link, demoLink, demoText } = props;

	// Map common simple-icons filenames to colored icons hosted by devicon (fallbacks)
	const coloredIconMap = {
		"react.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		"spring.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
		"postgresql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		"dotnet.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
		"mysql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		"python.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		"nodedotjs.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		"docker.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
		"cplusplus.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
		"html.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		"javascript.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	};

	const getColoredSrc = (src) => {
		if (!src || typeof src !== "string") return src;
		try {
			const parts = src.split("/");
			const filename = parts[parts.length - 1];
			if (coloredIconMap[filename]) return coloredIconMap[filename];
		} catch (e) {
			// ignore and return original
		}
		return src;
	};

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-header">
						<div className="project-logo">
							<img src={getColoredSrc(logo)} alt="logo" />
						</div>

						{/* tech stack icons (multiple) */}
						{logos && logos.length > 0 && (
							<div className="project-tech">
								{logos.map((src, i) => (
									<img
										key={i}
										src={getColoredSrc(src)}
										alt={`${title}-tech-${i}`}
										className="project-tech-icon"
										title={src.split("/").pop().replace(".svg", "")}
									/>
								))}
							</div>
						)}
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					
					{/* Links section */}
					<div className="project-links-container">
						<a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</a>
						
						{demoLink && (
							<a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link-button project-demo-button">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{demoText || 'Live Demo'}</div>
							</a>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
