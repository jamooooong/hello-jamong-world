import Polygon1 from "@assets/svgs/Polygon1.svg";
import Polygon2 from "@assets/svgs/polygon2.svg";

export default function BackGround() {
  return (
    <div className="relative w-full min-h-screen bg-[radial-gradient(ellipse_84.84%_103.37%_at_31.82%_32.27%,_#FCFCFC_0%,_#AFB7CF_100%)] overflow-hidden">
      <div className="absolute inset-0">
        {/* Polygon 1 */}
        <img
          src={Polygon1}
          alt="Polygon 1"
          className="absolute w-20 h-20 opacity-30"
          style={{
            animation:
              "floatRandom1 40s cubic-bezier(0.42, 0, 0.58, 1) infinite",
            willChange: "transform",
          }}
        />

        {/* Polygon 2 */}
        <img
          src={Polygon2}
          alt="Polygon 2"
          className="absolute w-24 h-24 opacity-40"
          style={{
            animation:
              "floatRandom2 35s cubic-bezier(0.42, 0, 0.58, 1) infinite",
            willChange: "transform",
          }}
        />
      </div>

      <style>{`
        @keyframes floatRandom1 {
          0%   { transform: translate3d(5vw, 10vh, 0) scale(1) rotate(0deg); }
          20%  { transform: translate3d(70vw, 15vh, 0) scale(1.1) rotate(60deg); }
          40%  { transform: translate3d(60vw, 60vh, 0) scale(0.9) rotate(120deg); }
          60%  { transform: translate3d(20vw, 70vh, 0) scale(1.2) rotate(180deg); }
          80%  { transform: translate3d(10vw, 40vh, 0) scale(1) rotate(300deg); }
          100% { transform: translate3d(5vw, 10vh, 0) scale(1) rotate(360deg); }
        }

        @keyframes floatRandom2 {
          0%   { transform: translate3d(80vw, 80vh, 0) scale(1) rotate(0deg); }
          25%  { transform: translate3d(40vw, 60vh, 0) scale(1.1) rotate(90deg); }
          50%  { transform: translate3d(30vw, 30vh, 0) scale(0.95) rotate(180deg); }
          75%  { transform: translate3d(70vw, 20vh, 0) scale(1.05) rotate(270deg); }
          100% { transform: translate3d(80vw, 80vh, 0) scale(1) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
