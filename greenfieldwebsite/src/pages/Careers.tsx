import React from "react";
import EachFuc from "../components/Eachpage";
import CareerPage from '../components/Career';
import Page from "../assets/goalsimg.jpg";
import Sponsor from "../components/ourSponsor";
const jobs = [
    {
        title: 'Frontend Developer',
        description: 'Join our team as a frontend developer and work on exciting projects.',
    },
    {
        title: 'UX Designer',
        description: 'We are looking for a talented UX designer to improve our user experience.',
    },
    // Add more job objects as needed
];


const CareersPage: React.FC = () => {
  return (
    <>
      <EachFuc
      Title=" Career "
      image={Page}
     />
      <CareerPage jobs={jobs} />
      
      <Sponsor />
    </>
  
  );
};

export default CareersPage;
