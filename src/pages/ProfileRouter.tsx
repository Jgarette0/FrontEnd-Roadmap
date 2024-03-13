import { useParams } from "react-router-dom";
import HomePage from "./Home";
import NotFoundPage from "./404NotFoundPage"; // Assuming this component exists
import AboutPage from "./About";
import RoadmapPage from "./Roadmap";
import Slider from "@/components/Slider";

export function ProfileRouter() {
  const params = useParams<{ profileId: string }>();

  return (
    <>
      <div>
        {params.profileId === "Home" ? (
          <HomePage />
        ) : params.profileId === "About" ? (
          <AboutPage />
        ) : params.profileId === "Roadmap" ? (
          <RoadmapPage />
        ) : params.profileId === "Bintana" ? (
          <Slider />
        ) : (
          <div>
            This is {params.profileId} <NotFoundPage />
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileRouter;
