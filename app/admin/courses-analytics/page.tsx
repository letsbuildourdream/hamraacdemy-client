'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
         title="Harmra Academy - Admin"
         description="Hamra Academy is a comprehensive learning management system designed to empower individuals through skill-building in project management, personal growth, leadership, and interpersonal skills"
         keywords="project management, personal growth, leadership, communication skills, Agile, Scrum, team management, career advancement, self-development, professional growth, practical skills, time management, interpersonal skills, real-world applications"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <CourseAnalytics />
            </div>
        </div>
    </div>
  )
}

export default page