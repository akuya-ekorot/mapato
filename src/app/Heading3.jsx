import { DM_Serif_Display } from "next/font/google";
const display = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Heading3 = ({ text }) => (
  <h3 className={`text-4xl ${display.className}`}>{text}</h3>
);

export default Heading3;
