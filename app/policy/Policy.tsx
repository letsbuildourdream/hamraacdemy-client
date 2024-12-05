import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
      At Hamra Academy, we are committed to providing a high-quality learning experience for all our users. By accessing and using our platform, you agree to the following terms and conditions. Please read them carefully.
          accusantium quod numquam dolores!
        </p>
        <br />
        <h1>Acceptance of Terms</h1><br />
        <p>By using Hamra Academy&apos;s services, you agree to comply with these Terms and Conditions, as well as any applicable laws and regulations. If you do not agree with these terms, you are prohibited from using the platform
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        <h1>Use of Platform</h1><br />
        Hamra Academy provides a range of online learning resources, including courses, materials, and tools related to project management, personal growth, and other professional development topics. You agree to use these resources solely for personal, educational purposes and not for any unlawful or commercial activity.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        In order to access certain features of Hamra Academy, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        <h1>Course Access and Fees</h1><br />
        Certain courses on Hamra Academy may require a fee for access. By purchasing or enrolling in a course, you agree to pay the specified fees and abide by the terms set forth by the course provider.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        By accessing Hamra Academy, you agree to adhere to these terms. Thank you for being a part of our learning community!
        </p>
      </ul>
      </div>
    </div>
  );
};

export default Policy;
