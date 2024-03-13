import { NavLink, Outlet } from "react-router-dom";

export function ProfilePage() {
  const profiles = ["Home", "About", "Bintana", "Roadmap", "Secret"];
  return (
    <>
      <div className="navbar font-mono flex flex-col fixed top-64 left-0 gap-10 text-xl p-5 ">
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "bg-slate-600 text-slate-100" : "";
            }}
          >
            {profile}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <Outlet />
      </div>
    </>
  );
}

export default ProfilePage;
