import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4D0BAQHsEBJ78oQTEg/company-logo_200_200/0/1649321348266/globaliasoft_logo?e=2147483647&v=beta&t=nlOYQA5phkDzngGyU_O9aRiSni6KgDKAFSLfh8K1bnc"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Globalia Soft LLP</div>
							<div className="work-subtitle">
								Mern-stack Devloper
							</div>
							<div className="work-duration">Jun 2022 - Feb 2023</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4D0BAQE6yPlCvpMkMA/company-logo_200_200/0/1675346491865/codeline_infotech_logo?e=2147483647&v=beta&t=Wn83OqqBc51K5naNv1iQpuKPARaF38R3hA4l0YGpa_g"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Codeline Infotech LLP
							</div>
							<div className="work-subtitle">
								Mern-stack Devloper
							</div>
							<div className="work-duration">Mar 2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
