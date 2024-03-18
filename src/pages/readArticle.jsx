import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import INFO from "../data/user";
import myArticles from "../data/allProject";

import "./styles/readArticle.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="title read-article-title">
								{article().title}
								<FontAwesomeIcon className="project-link-icon" icon={faLink} />
							</div>
							<div className="project-link-icon">
							</div>
							<div className="read-article-date-container">
								{article().date.map((item, i) => (
									<div className="read-article-date">
										{item}
									</div>
								))}
							</div>
							<div className="read-article-logo2">
								{article().logo_1.map((item, i) => (
									<img src={item} alt="logo" />
								))}
							</div>
							<div className="read-article-body">
								<div className="read-article-body-title">
									- Project Photo's
								</div>
								<div className="read-article-body-photo">
									{article().photos.map((item, i) => (
										<div>
											<img src={item.url} alt="logo" />
											<p>{item.title}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
