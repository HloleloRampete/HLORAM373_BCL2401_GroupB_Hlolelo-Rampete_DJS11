import { useEffect, useState } from "react";
import Header from "../components/CommonComponents/Header/index";
import PodcastCard from "../components/Podcasts/PodcastCard";
import InputComponent from "../components/CommonComponents/Input";

// Genre ID to Title mapping
const genreMap = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family"
};

export default function PodcastsPage() {
    const [podcasts, setPodcasts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await fetch("https://podcast-api.netlify.app");
                const data = await response.json();
                const podcastsData = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    displayImage: item.displayImage,
                    genre: genreMap[item.genre] // Map genre ID to title
                }));
                setPodcasts(podcastsData);
            } catch (error) {
                console.error("Error fetching podcasts:", error);
            }
        };

        fetchPodcasts();
    }, []);

    console.log(podcasts);

    let filteredPodcasts = podcasts.filter((item) =>
        item.title.trim().toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className="input-wrapper" style={{ marginTop: "2rem" }}>
                <h1>Discover Podcasts</h1>
                <InputComponent
                    state={search}
                    setState={setSearch}
                    placeholder="Search By Title"
                    type="text"
                />

                {filteredPodcasts.length > 0 ? (
                    <div className="podcasts-layout" style={{ marginTop: "1.5rem" }}>
                        {filteredPodcasts.map((item) => {
                            return (
                                <PodcastCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    displayImage={item.displayImage}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <p>{search ? "Podcast Not Found" : "No Podcasts On The Platform"}</p>
                )}
            </div>
        </div>
    );
}
