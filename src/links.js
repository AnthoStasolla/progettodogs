import { IoIosFootball } from "react-icons/io";
import { GiNightSleep } from "react-icons/gi";
import {
  FaHamburger,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import team1 from "./assets/immagini/team1.jpg";
import team2 from "./assets/immagini/team2.jpg";
import team3 from "./assets/immagini/team3.jpg";

const socialLinks = [
  {
    id: 0,
    url: "https://instagram.com",
    icon: (
      <FaInstagram
        className="icon"
        style={{
          color: "violet",
        }}
      />
    ),
  },
  {
    id: 1,
    url: "https://facebook.com",
    icon: (
      <FaFacebook
        className="icon"
        style={{
          color: "#1868b6",
        }}
      />
    ),
  },

  {
    id: 2,
    url: "https://google.com",
    icon: (
      <FaGoogle
        className="icon"
        style={{
          color: "red",
        }}
      />
    ),
  },
  {
    id: 3,
    url: "https://linkedin.com",
    icon: (
      <FaLinkedin
        className="icon"
        style={{
          color: "#09529a",
        }}
      />
    ),
  },
  {
    id: 4,
    url: "https://github.com",
    icon: <FaGithub className="icon" />,
  },
  {
    id: 5,
    url: "https://twitter.com",
    icon: (
      <FaTwitter
        className="icon"
        style={{
          color: "cyan",
        }}
      />
    ),
  },
];

export const SocialBar = () => {
  return (
    <ul className="social">
      {socialLinks.map((el) => {
        const { id, url, icon } = el;
        return (
          <li key={id}>
            <a href={url} alt="social">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export const cardsObj = [
  {
    id: 0,
    titolo: "PLAY",
    icon: (
      <IoIosFootball
        style={{
          color: "red",
        }}
      />
    ),
    testo: "Play all day long",
  },
  {
    id: 1,
    titolo: "SLEEP",
    icon: (
      <GiNightSleep
        style={{
          color: "blue",
        }}
      />
    ),
    testo: "Sleeping  ...zzzz...",
  },
  {
    id: 2,
    titolo: "EAT",
    icon: (
      <FaHamburger
        style={{
          color: "green",
        }}
      />
    ),
    testo: "Eat everything ",
  },
];

export const cardTeam = [
  {
    id: 0,
    titolo: "Sbirulino",
    ruolo: "Founder",
    img: team1,
  },
  {
    id: 1,
    titolo: "Princisvalda",
    ruolo: "Co-founder",
    img: team2,
  },
  {
    id: 2,
    titolo: "Sgongolo",
    ruolo: "Developer",
    img: team3,
  },
];
