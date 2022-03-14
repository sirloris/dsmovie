import { ReactComponent as GithubIcon } from "../../assets/img/github.svg";
import "./styles.css";

export function Navbar() {
	return (
		<header>
			<nav className="container">
				<div className="dsmovie-nav-content">
					<h1>DSMovie</h1>
					<a href="https://github.com/sirloris">
						<div className="dsmovie-contact-container">
							<GithubIcon />
							<p className="dsmovie-contact-link">/sirloris</p>
						</div>
					</a>
				</div>
			</nav>
		</header>
	);
}