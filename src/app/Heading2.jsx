import { DM_Serif_Display } from "next/font/google";
const display = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Heading2 = ({ text }) => (
  <h2 className={`lg:text-6xl md:text-4xl text-3xl ${display.className}`}>
    {text}
  </h2>
);

export default Heading2;
