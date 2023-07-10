import { motion} from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas }  from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] ma-w-7xl
            mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6d46c2]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h2 className={`${styles.heroHeadText}`}>Hi!, I'm
            <span className="text-[#915eff]">Yashasvi</span></h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Software,Game Developer,
            <br className="sm:block hidden" />
            always eager to work upon new techs.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full
              flex justify-center items-center pt-10px">
        <a href="#about">
          <div className="w-[28px] h-[60px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-1.5">
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className="w-5 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero