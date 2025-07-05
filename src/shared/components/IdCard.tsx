import { useState, useRef } from "react";
import Imoji from "@assets/pngs/Imoji.png";
import IconReact from "@assets/svgs/Icon-react.svg";
import IconJS from "@assets/svgs/Icon-JS.svg";
import IconTS from "@assets/svgs/Icon-TS.svg";
import IconPs from "@assets/svgs/Icon-PS.svg";
import IconAi from "@assets/svgs/Icon-AI.svg";
import IconFigma from "@assets/svgs/Icon-Fig.svg";

export default function IdCard() {
  const [transform, setTransform] = useState("");
  const [overlayStyle, setOverlayStyle] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return; // 회전 중일 때는 마우스 효과 비활성화

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 회전 강도를 줄임
    const rotateY = (x - rect.width / 2) * 0.03;
    const rotateX = (y - rect.height / 2) * -0.03;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`
    );
    setOverlayStyle(
      `opacity: ${Math.min(x / 500, 0.6)}; background-position: ${
        x / 5 + y / 5
      }%;`
    );
  };

  const handleMouseLeave = () => {
    if (isFlipped) return;
    setTransform("perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)");
    setOverlayStyle("opacity: 0;");
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      // 클릭 시 가로 회전만 (확대 제거)
      setTransform(
        "perspective(1000px) rotateY(360deg) rotateX(0deg) scale(1)"
      );
      setOverlayStyle("opacity: 0;");
    } else {
      // 다시 클릭 시 가로 회전만 (확대 제거)
      setTransform(
        "perspective(1000px) rotateY(720deg) rotateX(0deg) scale(1)"
      );
      setOverlayStyle("opacity: 0;");
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer z-10 ${
        isFlipped
          ? "transition-all duration-1000 ease-in-out"
          : "transition-all duration-300 ease-out"
      }`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Hologram Overlay */}
      <div
        className={`absolute inset-0 rounded-2xl mix-blend-color-dodge brightness-110 pointer-events-none ${
          isFlipped
            ? "transition-all duration-1000 ease-in-out"
            : "transition-all duration-300 ease-out"
        }`}
        style={{
          background: `linear-gradient(105deg,
            transparent 40%,
            rgba(255, 219, 112, 0.8) 45%,
            rgba(132, 50, 255, 0.6) 50%,
            transparent 54%)`,
          backgroundSize: "150% 150%",
          backgroundPosition: "100%",
          filter: `brightness(1.2) ${overlayStyle}`,
          ...(overlayStyle && {
            backgroundPosition: overlayStyle.split(";")[1]?.split(":")[1],
          }),
        }}
      />

      {/* Card Content */}
      <div className="motion-preset-expand text-white flex flex-row justify-between w-180 h-100 bg-gradient-to-br from-black/40 to-zinc-600/40 rounded-2xl shadow-[inset_4px_4px_24px_0px_rgba(255,255,255,0.25)] shadow-[inset_-4px_-4px_24px_0px_rgba(191,198,216,0.25)] outline outline-1 outline-neutral-50 backdrop-blur-md pt-12 px-12 drop-shadow-indigo-600 text-shadow-2xs relative z-10">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-medium mb-2">박우석</p>
            <p className="text-base">PARK WOO-SEOK</p>
            <p className="text-base">&lt; Web Developer &#47;&gt;</p>
          </div>

          <img src={Imoji} alt="Imoji" className="w-50 h-50 mt-4" />
        </div>
        <div className="flex flex-col justify-between h-full pb-12">
          <div>
            <p className="text-2xl">tech</p>
            <div className="flex flex-row justify-between mt-2">
              <img src={IconReact} alt="React" className="w-10 h-10" />
              <img src={IconJS} alt="JavaScript" className="w-10 h-10" />
              <img src={IconTS} alt="TypeScript" className="w-10 h-10" />
            </div>
          </div>
          <div>
            <p className="text-2xl">design</p>
            <div className="flex flex-row justify-between mt-2">
              <img src={IconPs} alt="Photoshop" className="w-10 h-10" />
              <img src={IconAi} alt="Illustrator" className="w-10 h-10" />
              <img src={IconFigma} alt="Figma" className="w-10 h-10" />
            </div>
          </div>
          <div>
            <p className="text-base font-light">andro606@naver.com</p>
            <a
              href="https://github.com/jamooooong"
              target="_blank"
              className="text-base font-light hover:underline"
            >
              GitHub / jamooooong
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
