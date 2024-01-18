import avatar from "../assets/images/avatar.jpg";
import { SiGithub, SiLinkedin, SiGoogle } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="h-[74vh]">
      <div className=" flex justify-center items-center  mt-32 bg-slate-50  ">
        <div className="flex flex-col justify-center items-center mt-4 gap-3 shadow-lg border w-[322px] bg-slate-100">
          <p className="font-medium text-[#3D4152] w-full text-center py-2">
            About Me
          </p>
          <img
            className="rounded-full w-[150px] h-[150px] border-none align-middle "
            src={avatar}
            alt="user photo"
          />
          <p className="text-lg text-[#3D4152] font-bold">Abhishek Magdum</p>
          <p className="text-lg text-[#3D4152] font-bold">Frontend Developer</p>
          <div className="bg-slate-900 text-white p-4 rounded-sm w-[322px] ">
            <p className="pb-2 text-lg font-normal   text-center text-[#a7aecd]">
              HTML5 | CSS3 | Tailwind CSS |
            </p>
            <p className="pb-3 text-lg font-normal mr-3  text-center text-[#a7aecd]">
              Javascript | React.js
            </p>
            <div className=" text-[2em] text-center w-full flex items-center justify-center mt-2 ">
              <a
                href={"https://github.com/abhishekmagdum29"}
                className="mb-2 pr-4 hover:scale-105 "
                target="_blank"
              >
                <i className="bg-[#333] icon--i">
                  <SiGithub className=" hover:text-sky-600" />
                </i>
              </a>
              <a href="" className="mb-2 pr-4 hover:scale-105" target="_blank">
                <i className="bg-[#0e76a8] icon--i">
                  <SiLinkedin className=" hover:text-sky-600" />
                </i>
              </a>
              <a
                href={"https://twitter.com/Abhishek_m29"}
                className="mb-2 hover:scale-105"
                target="_blank"
              >
                <i className="bg-[#ea4335] icon--i">
                  <FaXTwitter className=" hover:text-sky-600" />
                </i>
              </a>
              <a
                href={"mailto:abhishekmagdum76@gmail.com"}
                className="mb-2 hover:scale-105"
                target="_blank"
              >
                <i className="bg-[#ea4335] icon--i">
                  <SiGoogle className="ml-3 hover:text-sky-600" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
