import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Emily Carter",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Project Manager | London, UK",
    comment: "I had the pleasure of taking courses at Hamra Academy, and I must say it has been a transformative experience. The platform offers a diverse range of well-structured lessons that cater to different levels of project management expertise. The practical insights and real-world examples provided have greatly enhanced my ability to manage projects effectively. If you&apos;re serious about advancing your project management career, Hamra Academy is the perfect choice!"
},
  {
    name: "Carlos Rivera",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Entrepreneur | Mexico City, Mexico",
    comment: "Thanks to Hamra Academy, I&apos;ve gained incredible insights into personal growth and leadership strategies. The courses are engaging and packed with actionable steps that have helped me lead my business more confidently. The support and motivation from the instructors are unmatched. I highly recommend Hamra Academy to anyone seeking to unlock their potential and excel in life and work"
},

 {
    name: "Aayesha Khan",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Leadership Coach | Karachi, Pakistan",
    comment: "Taking the personal growth courses at Hamra Academy was one of the best decisions I&apos;ve made. The teaching approach is outstanding, and the content is highly relatable and easy to implement in real-life scenarios. I particularly loved how the lessons encourage self-reflection while providing clear strategies for improvement. Hamra Academy has truly helped me grow both personally and professionally."
  },
  {
    name: "William Thompson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "IT Project Manager | Sydney, Australia",
    comment:"Hamra Academy stands out for its focus on practical application. I recently completed a course on Agile project management, and the detailed step-by-step guidance has been a game-changer in managing my projects. The hands-on activities and case studies were especially helpful in understanding the nuances of Agile methodology. Highly recommended for anyone looking to enhance their project management skills!"
  },
  {
    name: "Shova Basnet",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "HR Specialist | Kathmandu, Nepal",
    comment:"Hamra Academy is a treasure trove of knowledge for personal and professional development. The personal growth courses helped me better understand how to build meaningful relationships and enhance my communication skills. The supportive learning environment made the experience even better. I&apos;m so grateful for the positive impact Hamra Academy has had on my life!"
  },
  {
    name: "Michael Evans",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Freelance Consultant | Cape Town, South Africa",
    comment:"I took a project management course at Hamra Academy, and it exceeded all my expectations. The lessons were clear, concise, and incredibly practical. What stood out most was the emphasis on actionable strategies that I could apply immediately to my work. I feel more confident and organized now, thanks to Hamra Academy. Keep up the amazing work!"
},
];

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
          Hear from our learners about how Hamra Academy has transformed their skills, careers, and personal growth. Their success stories inspire us to keep delivering exceptional education and support every step of the way!
          </p>
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
  </div>
  );
};

export default Reviews;
