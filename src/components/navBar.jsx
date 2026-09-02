import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import PageLayout from './layouts/pageLayout.jsx'
import { useState } from "react";
import { useTheme } from '../hooks/useTheme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function NavBar() {
  const location = useLocation();
  const currentPage = location.pathname
  const home = location.pathname === "/";
  const pageName = location.pathname.replace("/", ""); 

  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="text-text-primary fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-24">
        <div className="flex flex-row justify-between items-center py-4">
          <div className="flex flex-row items-center gap-1">
            <Link to="/" className="flex justify-center items-center gap-0">
              <span className="font-bold">jomnomz</span>
            </Link>
            <span>/</span>
            {!home && (
              <>
                <span>{pageName}</span>
                <span>/</span>
              </>
            )}
            <span className="animate-blink text-sm">|</span>
          </div>

          <div className="lg:flex-row gap-5 hidden lg:flex">
            <Link to="/aboutMe">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/techStack">Tech Stack |</Link>
            <button onClick={toggleTheme} className="border rounded-[999px] -ml-2 px-1 py-0.3">
                <div>{theme === 'dark' ? <LightModeIcon sx={{ fontSize: 18,  paddingBottom: 0.3 }} ></LightModeIcon> : <DarkModeIcon sx={{ fontSize: 18,  paddingBottom: 0.3 }} ></DarkModeIcon>}</div>
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}><MenuIcon></MenuIcon></button>
          </div>

          {isOpen && (
            <div className="lg:hidden fixed right-0 left-0 top-0 bottom-0">
              <PageLayout>
                  <div className=" border-b pb-2  flex flex-row justify-between mt-5">
                      <div className="flex flex-row items-center gap-1">
                        <Link to="/" className="flex justify-center items-center gap-0">
                          <span className="font-bold">jomnomz</span>
                        </Link>
                        <span>/</span>
                        {!home && (
                          <>
                            <span>{pageName}</span>
                            <span>/</span>
                          </>
                        )}
                        <span className="animate-blink text-sm">|</span>
                      </div>
                      <div className="flex flex-row gap-2">
                        < button onClick={toggleTheme} className="border rounded-[999px] px-1 py-0.3">
                              <div>{theme === 'dark' ? <LightModeIcon sx={{ fontSize: 18,  paddingBottom: 0.3 }} ></LightModeIcon> : <DarkModeIcon sx={{ fontSize: 18,  paddingBottom: 0.3 }} ></DarkModeIcon>}</div>
                          </button>
                          <div className="" ><button className="" onClick={() => setIsOpen(false) }><ClearIcon></ClearIcon></button></div>
                      </div>
                  </div>

                  <div className="gap-5 flex flex-col">
                    <div>
                      <button onClick={() => setIsOpen(false)}><Link to="/aboutMe">About</Link></button>
                    </div>
                    <div>
                      <button onClick={() => setIsOpen(false)}><Link to="/experience">Experience</Link></button>
                    </div>
                    <div>
                      <button onClick={() => setIsOpen(false)}><Link to="/projects">Projects</Link></button>
                    </div>
                    <div>
                      <button onClick={() => setIsOpen(false)}><Link to="/techStack">Tech Stack</Link></button>
                    </div>
                  </div>
              </PageLayout>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}