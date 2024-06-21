import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/CommonComponents/Header";
import Button from "../components/CommonComponents/Button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import CarouselComponent from "../components/Carousel/CarouselComponent";

export default function Profile() {
  const user = useSelector((state) => state.user.user);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/id");
        const data = await response.json();
        const podcastsData = data.map((item) => ({
          key: item.id,
          id: item.id,
          title: item.title,
          displayImage: item.displayImage,
        }));
  
        setPodcasts(podcastsData);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };
    fetchPodcasts();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("You Have Successfully Logged Out!");
      })
      .catch((error) => {
   
        toast.error(error.message);
      });
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className="input-wrapper">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.uid}</h1>
        <Button text={"Logout"} onClick={handleLogout} />
        <h2>Recently Updated Podcasts</h2>
        <CarouselComponent
        />
      </div>
    </div>
  );
}
