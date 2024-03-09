import { useParams } from "react-router-dom";
import HomePage from "./Home";
import NotFoundPage from "./404NotFoundPage"; // Assuming this component exists

export function ProfileRouter() {
  const params = useParams<{ profileId: string }>();

  return (
    <>
      <div>
        {params.profileId === "Home" ? (
          <HomePage />
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
