import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section
    role="home"
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} `}
  >
    <div
      className={`flex-1 ${styles.flexStart}
  flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className="flex flex-row items-center py-[6px] px-4
        bg-discount-gradient rounded-[10px] mb-2"
      >
        <img
          src={discount}
          alt="discount icon"
          className="h-[32px] w-[32px] "
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 MONTH</span> Acount
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full ">
        <h1
          className="flex-1 font-poppins font-semibold
        ss:text-[72px]  text-[52px] text-white ss:leading-[100px] leading-[75px]"
        >
          The Next <br className="sm:block hidden " />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="sm:flex hidden md:mr-4 mr-2 text-white">
          <GetStarted />
        </div>
      </div>
      <h1
        className=" font-poppins font-semibold
        ss:text-[62px]  text-[52px] text-white ss:leading-[100px] leading-[75px]"
      >
        Payment Method.
      </h1>
    </div>
    <div>
      <img src={robot} alt="robot arm " className="w-[100%]  relative z-[5]" />
      <div
        className="absolute z-[0] w-[40%]
          h-[30%] top-0 pink__gradient"/>
      <div
        className="absolute z-[1] w-[80%]
          h-[80%] bottom-40 rounded-full white__gradient"/>
      <div
        className="absolute z-[0] w-[50%]
          h-[50%] right-20 bottom-20 blue__gradient"/>
    </div>
  </section>
);

export default Hero;
