import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Hamra Academy?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
        Are you ready to elevate your skills and transform your personal and professional growth? Welcome to Hamra Academy, your go-to platform for mastering project management and unlocking your full potential through personal growth training.
          <br />
          <br />
          As the founder of Hamra Academy, I understand the importance of balancing technical expertise with personal development in today&apos;s fast-paced world. That&apos;s why I established this platform  &ndash; to empower learners like you with the skills and mindset needed to thrive in your career and life.
          <br />
          <br />
          At Hamra Academy, we specialize in delivering comprehensive courses on project management, interpersonal skills, and personal growth strategies. Our engaging and practical lessons are designed to help you not only gain knowledge but also apply it effectively in real-life situations.
          <br />
          <br />
          At Hamra Academy, we believe that price should never be a barrier to
          achieving your dreams. That&apos;s why our courses are priced low
          &ndash; so that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
          <br />
          But Hamra Academy is more than just a learning platform &ndash; it&apos;s a supportive community of learners, achievers, and growth enthusiasts. We believe that true learning happens in an environment where you feel encouraged and inspired to reach for your dreams. Our team is here to guide you every step of the way.
          <br />
          <br />
          With Hamra Academy, there&apos;s no limit to what you can achieve. Whether you&apos;re a budding project manager, a professional looking to improve your leadership skills, or someone seeking a pathway to personal growth, we have the tools, courses, and community to support your journey.
          <br />
          <br />
          So, why wait? Join the Hamra Academy family today and take the first step toward a brighter, more fulfilling future. Together, let&apos;s build the skills, confidence, and vision to make your goals a reality.
        </p>
        <br />
        <span className="text-[22px]">Jafar Hamra&apos;s</span>
        <h5 className="text-[18px] font-Poppins">
        Founder & CEO of Hamra Academy
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
