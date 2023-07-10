import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { testimonials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const FeedbackCard = ({ index, testimonial, name,
  designation, company }) => (
  <Tilt>
    <motion.div
      variants={fadeIn("", "spring", 0.5 * index, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <p className="text-white font-black text-[45px]">"</p>
      <div className="mt-1 ">
        <p>{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{name}
            </p>
            <p className="mt-1 text-[12px]">
              <span className="text-secondary">{designation}</span><span className="pink-text-gradient">{company}</span>
            </p>
          </div>
        </div>
      </div>
      
    </motion.div>
  </Tilt>
)


const Feedbacks = () => {
  return (
    <div className="mt-12rounded-[20px]">
      <div >
        <motion.div
          variants={textVariant()}
          className={`${styles.padding}
          bg-tertiary rounded-2xl min-h-[200px]`}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-5 pb-14 flex flex-wrap gap-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")