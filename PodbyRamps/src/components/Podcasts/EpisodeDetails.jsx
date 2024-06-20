import Button from "../CommonComponents/Button";

export default function EpisodeDetails({ index, title, description, audioFile, onClick }) {
    
    return (
    
      <div style={{ width: "100%" }}>
        <h1 style={{ textAlign: "left", marginBottom: 0 }}>
          {index}. {title}
        </h1>
        <p style={{ marginLeft: "1.5rem" }} className="podcast-description ">
          {description}
        </p>
        <Button
          text={"Play"}
          onClick={() => onClick(audioFile)}
          width={"100px"}
        />
      </div>
    );
  }

  // still to add audio