import Polygon1 from "@assets/svgs/Polygon1.svg";
import Polygon2 from "@assets/svgs/polygon2.svg";

export default function BackGround() {
  return (
    <div className="relative w-full min-h-screen bg-[radial-gradient(ellipse_84.84%_103.37%_at_31.82%_32.27%,_#FCFCFC_0%,_#AFB7CF_100%)] overflow-hidden">
      <div className="absolute inset-0">
        {/* Polygon 1 - 첫 번째 패턴으로 둥둥 */}
        <img
          src={Polygon1}
          alt="Polygon 1"
          className="absolute w-20 h-20 opacity-30"
          style={{
            animation: "float1 20s ease-in-out infinite",
          }}
        />

        {/* Polygon 2 - 두 번째 패턴으로 둥둥 */}
        <img
          src={Polygon2}
          alt="Polygon 2"
          className="absolute w-24 h-24 opacity-40"
          style={{
            animation: "float2 15s ease-in-out infinite reverse",
          }}
        />
      </div>

      <style>{`
        @keyframes float1 {
          0% { transform: translate(10vw, 20vh) rotate(0deg); }
          25% { transform: translate(80vw, 10vh) rotate(90deg); }
          50% { transform: translate(70vw, 80vh) rotate(180deg); }
          75% { transform: translate(20vw, 70vh) rotate(270deg); }
          100% { transform: translate(10vw, 20vh) rotate(360deg); }
        }
        
        @keyframes float2 {
          0% { transform: translate(60vw, 60vh) rotate(0deg); }
          33% { transform: translate(30vw, 30vh) rotate(120deg); }
          66% { transform: translate(90vw, 50vh) rotate(240deg); }
          100% { transform: translate(60vw, 60vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
