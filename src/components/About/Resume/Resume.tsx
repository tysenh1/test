import { animate, motion } from "framer-motion";
import ResumeHeader from "./Header";

function Resume() {
  return (
    <div className="pl-64 pr-64">
      <h2 className="text-white text-5xl font-light font-roboto mb-8">About Me</h2>
      
      <ResumeHeader headerText={'Profile'} />

      <ul className="list-none text-white font-roboto [&_li]:my-6 [&_li]:mx-12 font-light mb-12">
        <li><p>Completing Red River Polytechnic's Application Development and Delivery (AD&D) program.</p></li>
        <li><p>Over 2 years of combined experience with coding languages including Python, JavaScript/TypeScript, SQL, HTML and CSS.</p></li>
        <li><p>1 year of experience as a backend software engineer building RESTful APIs using Python and JavaScript/TypeScript as well as relational databases using PostgreSQL.</p></li>
        <li><p>6 months of experience developing frontend web apps using React.js, Tailwind CSS and Framer and integration with backend applications.</p></li>
        <li><p>7 months of combined experience with ORMs, query builders and raw SQL database drivers using PostgreSQL in TypeScript.</p></li>
        <li><p>2+ years of combined experience using GitHub and Git Bash for coding projects and as part of the AD&D program.</p></li>
        <li><p>Team collaboration and leadership skills gained from coding side projects and group projects in the AD&D program.</p></li>
      </ul>

      <ResumeHeader headerText={'Education'}/>

      <ul className="list-none text-white font-roboto font-semibold [&_li]:my-2 [&_li]:mx-12 text-lg">

      </ul>

      <ResumeHeader headerText={'Experience'} />

      <ul className="list-none text-white font-roboto font-semibold [&_li]:my-2 [&_li]:mx-12 text-lg">
        <li><p>Server</p><p className="float-right relative -top-6">October 2021-Present</p></li>
        <li><p>Seine River Retirement Residence</p><p className="float-right relative -top-6">Winnipeg, Manitoba</p></li>
      </ul>

      <ul className="list-none text-white font-roboto font-light [&_li]:my-6 [&_li]:mx-12 mb-12">
        <li><p>Provided excellent customer service by efficiently managing tables and ensuring fast order delivery, resulting in above average customer satisfaction.</p></li>
        <li><p>Resolved customer complaints and issues in a timely manner, leading to an increase in repeat customers for my section of the dining room.</p></li>
        <li><p>Collaborated with kitchen staff and other serves to ensure quick food preparation and delivery.</p></li>
        <li><p>Maintained a clean and organized dining room, enhancing the overall dining experience.</p></li>
      </ul>

      <h4 className="text-white font-roboto font-semibold mx-12 text-lg">Coding</h4>

      <ul className="list-none text-white font-roboto font-light [&_li]:my-6 [&_li]:mx-12 mb-12">
        <li><p>Designed multiple RESTful APIs over the course of a year using Django and NestJS to process and store data from the Riot Games API.</p></li>
        <li><p>Optimized a back-end web application leveraging the latest code libraries to decrease query times by 10 times over the industry standard.</p></li>
        <li><p>Applied material from multiple CX/UX and front-end development courses during the development of a coding portfolio, to ensure a seamless and accessible user experience.</p></li>
      </ul>
    </div>
  )
}

export default Resume