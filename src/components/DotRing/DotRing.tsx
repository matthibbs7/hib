import "./DotRing.css";
import useMousePosition from "../../app/hooks/useMousePosition";

const DotRing = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;