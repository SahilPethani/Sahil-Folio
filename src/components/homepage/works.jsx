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
			duration: "Jun 2022 - Feb 2023",
		},
		{
			img: "https://media.licdn.com/dms/image/C4D0BAQE6yPlCvpMkMA/company-logo_200_200/0/1675346491865/codeline_infotech_logo?e=2147483647&v=beta&t=Wn83OqqBc51K5naNv1iQpuKPARaF38R3hA4l0YGpa_g",
			title: "Codeline Infotech LLP",
			subtitle: "Mern-stack Devloper",
			duration: "Mar 2023 - Present",
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
