import { Link } from "react-router-dom";
import "./styles.css";
export default function PodcastsCard({ id, title, displayImage }) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className="podcast-card">
        <img src={displayImage} alt={title} className="podcast-image" />
        <p className="podcast-title">{title}</p>
      </div>
    </Link>
  );
}
