import { StaticImageData } from "next/image";
import airlineIcon from "../assets/icons/1_Airline_Vertical_Icon.svg";
import bankingIcon from "../assets/icons/2_Banking_Vertical_Icon.svg";
import retailIcon from "../assets/icons/3_Retail_Vertical_Icon.svg";
import automotiveIcon from "../assets/icons/4_Automotive_Vertical_Icon.svg";
import insuranceIcon from "../assets/icons/5_Insurance_Vertical_Icon.svg";
import hotelIcon from "../assets/icons/6_Hotel_Vertical_Icon.svg";

import airlinePhone from "../assets/phones/1_Airline.png";
import bankPhone from "../assets/phones/2_Bank.png";
import retailPhone from "../assets/phones/3_Retail.png";
import automotivePhone from "../assets/phones/4_Automotive.png";
import insurancePhone from "../assets/phones/5_Insurance.png";
import hotelPhone from "../assets/phones/6_Hotel.png";

type avail = {
  head: string;
  paragraph: string;
};

type Service = {
  title: string;
  icon: string;
  phone: StaticImageData;
};

const isAvail: avail = {
  head: "Is you Business Available in Chat?",
  paragraph:
    "Get ready to connect, interact and transact with your customers, while driving engagement, revenue and loyalty in chat messaging channels! The future is conversational 💬 and it’s AI-assisted ✨",
};

const serviceList: Service[] = [
  {
    title: "Board a flight",
    icon: airlineIcon,
    phone: airlinePhone,
  },
  {
    title: "Pay a bill",
    icon: bankingIcon,
    phone: bankPhone,
  },
  {
    title: "Place an order",
    icon: retailIcon,
    phone: retailPhone,
  },
  {
    title: "Rent a car",
    icon: automotiveIcon,
    phone: automotivePhone,
  },
  {
    title: "Make a claim",
    icon: insuranceIcon,
    phone: insurancePhone,
  },
  {
    title: "Book a room",
    icon: hotelIcon,
    phone: hotelPhone,
  },
];

export { isAvail, serviceList };
