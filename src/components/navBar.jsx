import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div className="text-white fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-24">
        <div className="flex flex-row justify-between items-center py-4">
            <Link to="/" className="flex justify-center items-center gap-1" >
               Home
            </Link>

          <div className="flex flex-row gap-5">
            <Link to="/aboutMe">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/techStack">Tech Stack</Link>
          </div>
        </div>
      </div>
    </div>
  );
}