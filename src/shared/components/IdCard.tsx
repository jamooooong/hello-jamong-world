import { useState, useRef } from "react";
import IdCardImage from "@assets/svgs/id_card.svg";

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
    const rotateY = (x - rect.width / 2) * 0.05;
    const rotateX = (y - rect.height / 2) * -0.05;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`
    );
    setOverlayStyle(
      `opacity: ${Math.min(x / 500, 0.8)}; background-position: ${
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
      // 클릭 시 가로 회전 + 확대
      setTransform(
        "perspective(1000px) rotateY(360deg) rotateX(0deg) scale(1.5)"
      );
      setOverlayStyle("opacity: 0;");
    } else {
      // 다시 클릭 시 가로 회전 + 축소
      setTransform(
        "perspective(1000px) rotateY(720deg) rotateX(0deg) scale(1)"
      );
      setOverlayStyle("opacity: 0;");
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-[720px] h-[400px] cursor-pointer z-10 ${
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
        className={`absolute inset-0 w-[720px] h-[400px] mix-blend-color-dodge brightness-110 ${
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

      {/* Card Image */}
      <img
        src={IdCardImage}
        alt="ID Card"
        className="w-full h-full object-cover relative z-10"
        draggable={false}
      />
    </div>
  );
}
