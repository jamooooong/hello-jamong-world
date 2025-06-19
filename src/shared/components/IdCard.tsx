import Imoji from "@assets/pngs/Imoji.png";

import IconReact from "@assets/svgs/Icon-react.svg";
import IconJS from "@assets/svgs/Icon-JS.svg";
import IconTS from "@assets/svgs/Icon-TS.svg";
import IconPs from "@assets/svgs/Icon-PS.svg";
import IconAi from "@assets/svgs/Icon-AI.svg";
import IconFigma from "@assets/svgs/Icon-Fig.svg";

export default function BackGround() {
  return (
    <div className="motion-preset-expand  text-white flex flex-row justify-between w-180 h-100 bg-gradient-to-br from-black/40 to-zinc-600/40 rounded-2xl shadow-[inset_4px_4px_24px_0px_rgba(255,255,255,0.25)] shadow-[inset_-4px_-4px_24px_0px_rgba(191,198,216,0.25)] outline outline-1 outline-neutral-50 backdrop-blur-md pt-12 px-12 drop-shadow-indigo-600 text-shadow-2xs ">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col  gap-1 ">
          <p className=" text-4xl font-medium mb-2">박우석</p>
          <p className=" text-base">PARK WOO-SEOK</p>
          <p className=" text-base">&lt; Web Developer &#47;&gt;</p>
        </div>

        <img src={Imoji} alt="Imoji" className="w-50 h-50 mt-4" />
      </div>
      <div className="flex flex-col justify-between h-full pb-12">
        <div>
          <p className=" text-2xl">tech</p>
          <div className="flex flex-row justify-between mt-2">
            <img src={IconReact} alt="React" className="w-10 h-10" />
            <img src={IconJS} alt="JavaScript" className="w-10 h-10" />
            <img src={IconTS} alt="TypeScript" className="w-10 h-10" />
          </div>
        </div>
        <div>
          <p className=" text-2xl">design</p>
          <div className="flex flex-row justify-between mt-2">
            <img src={IconPs} alt="Photoshop" className="w-10 h-10" />
            <img src={IconAi} alt="Illustrator" className="w-10 h-10" />
            <img src={IconFigma} alt="Figma" className="w-10 h-10" />
          </div>
        </div>
        <div>
          <p className=" text-base font-light">andro606@naver.com</p>
          <a
            href="https://github.com/jamooooong"
            target="_blank"
            className=" text-base font-light hover:underline"
          >
            GitHub / jamooooong
          </a>
        </div>
      </div>
    </div>
  );
}
