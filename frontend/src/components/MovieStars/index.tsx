import { ReactComponent as StarFullIcon } from "../../assets/img/star-full.svg";
import { ReactComponent as StarHalfIcon } from "../../assets/img/star-half.svg";
import { ReactComponent as StarEmptyIcon } from "../../assets/img/star-empty.svg";
import "./styles.css";

export function MovieStars() {
	return (
		<div className="dsmovie-stars-container">
			<StarFullIcon />
			<StarFullIcon />
			<StarFullIcon />
			<StarHalfIcon />
			<StarEmptyIcon />
		</div>
	);
}
