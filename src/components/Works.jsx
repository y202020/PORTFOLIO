import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", 0.5 * index , 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name}
          className="w-full h-full object-cover rounded-2xl"/>
          
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "black")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center
                        items-center cursor-pointer">
              <img src={github} alt={github} className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
          
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name}
            className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      className="bg-tertiary rounded-2xl p-10">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className={`${styles.padding}
      bg-tertiary rounded-2xl w-full flex -mt-20`}>   
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These are some projects showcase my skills and experience
          through real-world feasiblity of my work. Each project was developed or under development
          to learn new technologies and to manage and deliever projects effectively.
          It reflects my ability of focusing on practical utility,adaptive work with
          different new tech-stacks.
        </motion.p>
      </div>

      <div className="-mt-10 flex flex-wrap gap-7">
        {projects.map((project,index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")