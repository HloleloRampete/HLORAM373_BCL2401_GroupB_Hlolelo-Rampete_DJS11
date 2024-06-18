import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputComponent from "../CommonComponents/Input";
import Button from "../CommonComponents/Button";
import FileInput from "../CommonComponents/Input/FileInput";

export default function CreatePodcastForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [displayImage, setDisplayImage] = useState();
  const [bannerImage, setBannerImage] = useState();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("")
  }

  return (
    <div>
      <InputComponent
        state={title}
        setState={setTitle}
        placeholder="Title"
        type="text"
        required={true}
      />
      <InputComponent
        state={desc}
        setState={setDesc}
        placeholder="Description"
        type="text"
        required={true}
      />
      <FileInput accept={"image/*"} id="banner-image-input" />

      <Button
        text={loading ? "Loading..." : "Create Podcast"}
        disabled={loading}
        onClick={handleSubmit}
      />
    </div>
  );
}
