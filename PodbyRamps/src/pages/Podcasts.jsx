import { useEffect } from "react";
import Header from "../components/CommonComponents/Header/index";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";

export default function PodcastsPage() {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts.podcasts);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts")),
      (querySnapshot) => {
        const podcastsData = [];
        querySnapshot.forEach((doc) => {
          podcastsData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(setPodcasts(podcastsData));
      },
      (error) => {
        console.error("Error fetching podcats:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="input-wrapper" style={{ marginTop: "2rem" }}>
        <h1>Discover Podcasts</h1>
        {podcasts.length > 0 ? (
          <>
            {podcasts.map((item) => {
              return (<p>{item.title}</p>);
            })}
          </>
        ) : (
          <p>No Podcasts Found</p>
        )}
      </div>
    </div>
  );
}
