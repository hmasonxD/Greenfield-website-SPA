import React from "react";
import Section from "../components/Section";
import backgroundImage from "../assets/background.jpg";
import Whatwedo from "../components/WhatWedo";
import OurWork from "../components/OurWork";
import OurGoal from "../components/ourGoals";
import ContactSection from "../components/contactpage";
import Sponsor from "../components/ourSponsor";
import GoalImage from "../assets/goalsimg.jpg";

const Homepage: React.FC = () => {
    const sectionProps = {
        title: "Get Pre-approved for an Indoor Installation",
        subtitle:
            "We offer a helping hand to firms who are looking for experience and competency from an IT/Telecommunication Company. Greenfield International Technologies Inc provides service and support in Telecommunication space that is becoming more crowded every day with competition.",
        backgroundImage: backgroundImage,
        buttons: [{ text: "Contact Us", to: "/contact" }],
    };

    const ourGoalProps = {
        title: "Our Goal",
        goalDescription:
            "In order to excel in our industry, we must evolve as technology does, cultivating an environment of knowledge and growth. We aim to be a contractor that our clients can always rely on to meet or exceed their expectations. Safety, quality, and character are paramount to our ongoing success, and what we feel sets us apart. Additionally, the importance of a healthy work environment and interpersonal relationships cannot be understated. It is our belief that a small business is like a family, and employees should be treated in kind.\n Work should be as enjoyable and rewarding as it is challenging. We invite you to explore our website and learn more about who we are.",
        image: GoalImage,
        buttons: [{ text: "Learn More", to: "/about" }],
    };

    return (
        <>
            <Section {...sectionProps} />
            <OurWork />
            <Whatwedo />
            <OurGoal {...ourGoalProps} />
            <Sponsor />
            <ContactSection />
        </>
    );
};

export default Homepage;