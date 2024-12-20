'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import AllUsers from "../../components/Admin/Users/AllUsers";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Harmra Academy - Admin"
          description="Hamra Academy is a comprehensive learning management system designed to empower individuals through skill-building in project management, personal growth, leadership, and interpersonal skills"
          keywords="project management, personal growth, leadership, communication skills, Agile, Scrum, team management, career advancement, self-development, professional growth, practical skills, time management, interpersonal skills, real-world applications"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllUsers />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page