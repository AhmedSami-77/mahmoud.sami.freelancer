import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx"; // Import RxHistory
import {RiHistoryLine} from "react-icons/ri";


export const Socials = [
  {
    name: "Linkedin",
    src: "/linkedin.svg",
    link : "https://www.linkedin.com/in/mahmoud-sami-3a14262a5/",
  },
  {
    name: "Behance",
    src: "/behance.svg",
    link : "https://www.behance.net/mahmoudsami41",
  },
  {
    name: "Gmail",
    src: "/gmail.svg",
    link: "mailto:ahmed222333sami@gmail.com",
  },
  {
    name: "Youtube",
    src: "/youtube.svg",
    link : "https://www.youtube.com/channel/UC7CJozdEPoECL63YQjTXAWg",
  }
];
export const Projects = [
  {
    title: "wazzuf-clone",
    text: "For more information, please refer to my YouTube video, where I provide a more detailed explanation of the business.",
    src: "/project2.png",
    link:"https://www.youtube.com/watch?v=ZjJ2i2IcaRQ"

  },
  {
    title: "E-commerce",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/project1.png",
    link:"https://www.youtube.com/watch?v=ihlGoeOVmuI&t=8s"
  },
  
 
];
export const Reviews = [
 "/reviews/review1.jpg",
 "/reviews/review2.jpg",
  "/reviews/review3.jpg",
  "/reviews/review4.jpg",
  "/reviews/review5.jpg",
  "/reviews/review6.jpg",
  "/reviews/review7.jpg",
  "/reviews/review8.jpg",
 
];
export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/reviews",
    icon: RiHistoryLine,
    link: "/reviews",
  },
  
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
