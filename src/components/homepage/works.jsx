import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	const Work = [
		{
			img: "https://media.licdn.com/dms/image/C4D0BAQHsEBJ78oQTEg/company-logo_200_200/0/1649321348266/globaliasoft_logo?e=2147483647&v=beta&t=nlOYQA5phkDzngGyU_O9aRiSni6KgDKAFSLfh8K1bnc",
			title: "Globalia Soft LLP",
			subtitle: "Mern-stack Devloper",
			duration: "September 2022 - February 2023",
			link: "https://globaliasoft.com/",
		},
		{
			img: "https://media.licdn.com/dms/image/C4D0BAQE6yPlCvpMkMA/company-logo_200_200/0/1675346491865/codeline_infotech_logo?e=2147483647&v=beta&t=Wn83OqqBc51K5naNv1iQpuKPARaF38R3hA4l0YGpa_g",
			title: "Codeline Infotech LLP",
			subtitle: "Mern-stack Devloper",
			duration: "March 2023 - Present",
			link: "https://codelineinfotech.com/",
		},
	];
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{Work.map((item, index) => (
							<div className="work">
								<a href={item.link} target="_blank">
									<div className="work_div_1">
										<img
											src={item.img}
											alt="facebook"
											className="work-image"
										/>
										<div className="work-title">
											{item.title}
										</div>
									</div>
								</a>
								<div className="work_div_2">
									<div className="work-subtitle">
										{item.subtitle}
									</div>
									<div className="work-duration">
										{item.duration}
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
