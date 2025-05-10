import {useState} from "react";
import {Welcome} from "../welcome/welcome";

export function meta() {
  return [
    {title: "New React Router App"},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function Home() {
  const [show, setShow] = useState({
    project1: false,
    project2: false,
    project3: false,
    navbar: false,
  });

  const toggleShow = (project) => {
    setShow({...show, [project]: !show[project]});
  };

  return (
    <div className="main-container p-[10px] lg:p-[0px]">
      <div className="nav-bar flex justify-between p-[10px] items-center lg:p-[30px]">
        <img
          className="w-[80px]"
          src="/Gemini_Generated_Image_g495wxg495wxg495-Photoroom.png"
          alt=""
        />
        <ul className="hidden lg:flex lg:gap-[100px]">
          <li>
            <a href=""></a>About
          </li>
          <li>
            <a href=""></a>Contact
          </li>
          <li>
            <a href=""></a>Projects
          </li>
        </ul>
        <button onClick={() => toggleShow("navbar")}>
          <img className="lg:hidden" src="/align-justify (1).svg" alt="" />
        </button>
        {show.navbar && (
          <div>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="grid-cont lg:flex lg:items-center lg:gap-[30px] lg:p-[0px] mx-auto  bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/6676b800-f58a-4e2b-a311-414dd496eb59.jpeg')",
        }}
      >
        <div className="img-container rounded-[50%]">
          <img
            className="rounded-[50%] w-[800px] h-fit"
            src="/IMG_0584 copy-Photoroom.png"
            alt=""
          />
        </div>
        <div className="text-container">
          <h1 className="lg:text-[30px]">Am Allan</h1>
          <span className="text-[40px] bg-gradient-to-r from-lime-50 to-green-500 bg-clip-text text-transparent lg:text-[50px]">
            Software Developer
          </span>
          <p>
            I build softwares that actually have emotions embedded into them.
            Coding is not just a skill but its also a tool to streamline the
            lives of others in what small or big way . Work with me i never
            dissapoint.
          </p>
          <button className="p-[10px] bg-gradient-to-r from-lime-500 to-green-500 mt-[30px] lg:w-[200px] rounded-[10px] hover:bg-transparent hover:border-[1px] hover:cursor-pointer hover:scale-[1.03] hover:transition-colors duration-[0.2s] active:scale-[1] hover:shadow hover:shadow-green-600/50">
            About Me
          </button>
        </div>
      </div>
      <div className="visuals-container">
        <h2 className="text-[30px] text-center mt-[30px] mb-[30px]">
          What I do
        </h2>
        <div
          className="grid-container flex flex-col gap-[20px] lg:grid
            lg:grid-cols-3"
        >
          <div className="cont border-[1px] p-[50px] flex justify-center items-center flex-col gap-[20px] bg-gray-800 rounded-[10px] mt-[]20px] ">
            <img className="w-[70px]" src="/palette.svg" alt="" />
            <small className="text-[20px]">UI and UX design</small>
            <button
              onClick={() => toggleShow("project1")}
              className="p-[10px] bg-teal-900 rounded-[10px] active:bg-transparent active:scale-[1.09] active:transition-colors duration-[0.2s] active:border-[1px]"
            >
              See more
            </button>
            {show.project1 && (
              <p>
                I basically design websites for businesses and make them as eye
                catching as they can be
              </p>
            )}
          </div>
          <div className="cont border-[1px] p-[50px] flex justify-center items-center flex-col gap-[20px] bg-gray-800 rounded-[10px] mt-[]20px] ">
            <img className="w-[70px]" src="/laptop-minimal.svg" alt="" />
            <small className="text-[20px]">Software Development</small>
            <button
              onClick={() => toggleShow("project2")}
              className="bg-teal-900 rounded-[10px] active:bg-transparent active:scale-[1.09] active:transition-colors duration-[0.2s] active:border-[1px] p-[10px]"
            >
              See more
            </button>
            {show.project2 && (
              <p>
                I hard code the websites according to the specified conditions
                and preferences
              </p>
            )}
          </div>
          <div className="cont border-[1px] p-[50px] flex justify-center items-center flex-col gap-[20px] bg-gray-800 rounded-[10px] mt-[]20px] ">
            <img
              className="w-[70px]"
              src="/chart-column-increasing.svg"
              alt=""
            />
            <small className="text-[20px]">Systems Optimization</small>
            <button
              onClick={() => toggleShow("project3")}
              className="p-[10px] bg-teal-900 rounded-[10px] active:bg-transparent active:scale-[1.09] active:transition-colors duration-[0.2s] active:border-[1px]"
            >
              See more
            </button>
            {show.project3 && (
              <p>
                I make sure the existing systems are properly working and that
                growing websites are well running without any system
                malfunctions
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="assurances lg:flex lg:items-center lg:mt-[30px] lg:justify-between lg:p-[30px]">
        <div className="yox p-[20px] flex flex-col">
          <p className="font-extrabold text-[60px] lg:text-center lg:bg-transparent lg:w-auto">
            7 <br />
            <small className="text-[40px]">Months of experience</small>
          </p>
        </div>
        <div className="testimonials grid grid-cols-2 gap-[10px]">
          <div className="p-[20px] flex items-center justify-center bg-gray-700">
            <small className="text-[30px] font-light">
              30+ <br />
              Clients
            </small>
          </div>
          <div className="p-[20px] flex items-center justify-center bg-gray-700">
            <small className="text-[25px] font-light">
              7 months <br />
              Experience
            </small>
          </div>
          <div className="p-[20px] flex items-center justify-center bg-gray-700">
            <small className="text-[25px] font-light">
              10 <br />
              Completed projects
            </small>
          </div>
          <div className="p-[20px] flex items-center justify-center bg-gray-700">
            <small className="text-[25px] font-light">
              122+ <br />
              Completed Tasks
            </small>
          </div>
        </div>
      </div>
      <div className="featured-projects">
        <div className="nav-bar flex justify-between items-center">
          <div className="heading ">
            <h1 className="text-[25px]">Featured Pojects</h1>
            <small>List of my side projects</small>
          </div>
          <button className="p-[10px] bg-gradient-to-r from-lime-500 to-green-500 mt-[30px] lg:w-[200px] rounded-[10px] hover:bg-transparent hover:border-[1px] hover:cursor-pointer hover:scale-[1.03] hover:transition-colors duration-[0.2s] active:scale-[1] hover:shadow hover:shadow-green-600/50">
            See All
          </button>
        </div>
        <div className="projects-container lg:grid lg:grid-cols-3 lg:gap-[20px]">
          <div className="p-[10px] bg-gray-700 mt-[20px]">
            <div className="">
              <img
                className="rounded-[10px]"
                src="/Screenshot 2025-05-07 002609.png"
                alt=""
              />
              <p className="mt-[10px]">Nft collection blog for fun</p>
              <div className="specs grid grid-cols-3 gap-[20px]">
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  REACT
                </p>

                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  TAILWIND css
                </p>
              </div>
              <a className="" href="https://nftblogsigma.vercel.app/">
                <button className="mt-[20px] p-[10px] bg-gray-600 rounded-[10px]">
                  View Project
                </button>
              </a>
            </div>
          </div>

          <div className="p-[10px] bg-gray-700 mt-[20px]">
            <div className="img-cont">
              <img
                className="rounded-[10px]"
                src="/Screenshot 2025-05-09 230048.png"
                alt="extensions manager"
              />
              <p>Extensions manager for chrome</p>
              <div className="specs grid grid-cols-2 gap-[10px]">
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  REACT
                </p>
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  Javascript
                </p>
              </div>
            </div>
            <a href="https://extensions-manager-six.vercel.app/">
              <button className="mt-[20px] p-[10px] bg-gray-600 rounded-[10px]">
                View Project
              </button>
            </a>
          </div>

          <div className="p-[10px] bg-gray-700 mt-[20px]">
            <div className="img-cont">
              <img
                className="rounded-[10px]"
                src="/Screenshot 2025-05-09 230742.png"
                alt="MoviesDev"
              />
              <p>Movie streaming pc app</p>
              <div className="specs grid grid-cols-2 gap-[10px]">
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  REACT
                </p>
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  Javascript
                </p>
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  EXPRESS Js
                </p>
              </div>
            </div>
            <a href="https://my-repository-one-snowy.vercel.app/">
              <button className="mt-[20px] p-[10px] bg-gray-600 rounded-[10px]">
                View Project
              </button>
            </a>
          </div>
          <div className="p-[10px] bg-gray-700 mt-[20px]">
            <div className="img-cont">
              <img
                className="rounded-[10px]"
                src="/Screenshot 2025-05-10 000921.png"
                alt="MoviesDev"
              />
              <p className="mt-[20px] mb-[20px]">Mortgauge Calculator For pc</p>
              <div className="specs grid grid-cols-2 gap-[10px]">
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  HTML & Css
                </p>
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  Javascript
                </p>
              </div>
            </div>
            <a href="https://morgcalc.vercel.app/">
              <button className="mt-[20px] p-[10px] bg-gray-600 rounded-[10px]">
                View Project
              </button>
            </a>
          </div>
          <div className="p-[10px] bg-gray-700 mt-[20px]">
            <div className="img-cont">
              <img
                className="rounded-[10px]"
                src="/Screenshot 2025-05-10 001641.png"
                alt="MoviesDev"
              />
              <p className="mt-[20px] mb-[20px]">Tip Calculator For pc</p>
              <div className="specs grid grid-cols-2 gap-[10px]">
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  HTML & Css
                </p>
                <p className="p-[5px] flex items-center justify-center border-[1px] border-gray-300 bg-gray-900 rounded-[10px]">
                  Javascript
                </p>
              </div>
            </div>
            <a href="https://tipclaculator.vercel.app/">
              <button className="mt-[20px] p-[10px] bg-gray-600 rounded-[10px]">
                View Project
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="promise-area lg:text-center">
        <div className="flex flex-col gap-[10px] mt-[20px] lg:text-center">
          <h4 className="text-[30px] font-extrabold">
            Lets work together on your next Project
          </h4>
          <p className="font-extralight">
            Streamline your business endeavours with a well functioning software
          </p>
        </div>
        <button className="w-full p-[10px] bg-gradient-to-r from-lime-500 to-green-500 mt-[30px] lg:w-[200px] rounded-[10px] hover:bg-transparent hover:border-[1px] hover:cursor-pointer hover:scale-[1.03] hover:transition-colors duration-[0.2s] active:scale-[1] hover:shadow hover:shadow-green-600/50">
          Contact Me!
        </button>
        <br />
        <small className="text-[20px] mt-[30px] text-center">
          (+254)792624342
        </small>
      </div>
      <div className="footer bg-gray-800 mt-[20px] lg:text-center lg:p-[20px]">
        <strong>You can also follow me on all my socials</strong>
        <div className="small flex gap-[50px] justify-center p-[10px]">
          <a
            className="p-[10px] rounded-[10px] active:bg-green-200"
            href="https://www.linkedin.com/in/allan-kirimi-31ba92323/"
          >
            <img src="/linkedin.svg" alt="" />
          </a>
          <a className="p-[10px] rounded-[10px] active:bg-green-200" href="#">
            <img src="/facebook.svg" alt="" />
          </a>
          <a
            className="p-[10px] rounded-[10px] active:bg-green-200"
            href="https://www.codewars.com/users/dr_sigma"
          >
            <img src="/instagram.svg" alt="" />
          </a>
        </div>
        <h1 className="text-center text-[10px] font-light">
          Made By Allan <span>@ 2025</span>
        </h1>
      </div>
    </div>
  );
}
