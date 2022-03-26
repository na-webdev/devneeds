import { useRef, useState } from "react";
import Layout from "../components/layout";
import { invertColor } from "../components/functions";
import ColorPicker from "../components/ColorPicker";

function Colors() {
  const boxRef = useRef();
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState({ r: 22, g: 22, b: 22, a: 1 });

  function copy() {
    navigator.clipboard.writeText(boxRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <Layout
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        position: "relative",
        textAlign: "center",
        color: invertColor(
          `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(
            16
          )}`
        ),
      }}
      color={invertColor(
        `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(16)}`
      )}
    >
      <ColorPicker
        boxRef={boxRef}
        copied={copied}
        color={color}
        setColor={setColor}
        copy={copy}
      ></ColorPicker>
    </Layout>
  );
}

export default Colors;
