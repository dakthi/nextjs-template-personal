import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "Indefinite passion for teaching and inspiring",
  desc: "With the love and qualification to teach, she made it her lifetime mission to learn and digest difficult things, then proceed to teach them in manageable and enjoyble manners. An educated world is a better world to live in - she believes.",
  image: "/img/thi-with-camera.png",
  bullets: [
    {
      title: "CELTA is not only for teaching English",
      desc: "Qualified as a CELTA teacher in 2021, she applied the teaching principles learnt in pretty much everything. From onboarding and consulting clients to teaching colleagues...Excel and Python/Pandas.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Constant learning and updating",
      desc: "Not because she has FOMO (well, maybe a bit), but because she enjoys learning things. Before May 2024, Thi didn't know a line of code. Now, this website was launched full-stack, built upon Next.js (that's what Facebook, Netflix use), deployed on a VPS with a GitHub workflow. All of which she learnt in a week!",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "\"I believe everyone can learn enjoyably\"",
      desc: "Learning shouldn't be hard, which is only made so by bad learning habits and harmful prejudices. Wherever she goes, she inspires people to learn, to develop, and enjoy the process as they are doing so.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "A duty to be more efficient everyday",
  desc: "The same amount of work doesn't yield the same amount of bartering power as yesterday. To Thi, being more efficient incrementally is a standard, not a nice-to-have.",
  image: "/img/thi-at-bpp.jpg",
  bullets: [
    {
      title: "Accelerated learning",
      desc: "In any teams/industries, she believes asking the right questions are vital. Either leveraging cutting-edge generative AI or the layered knowledge and experience of her senior colleagues, she absorbs like nothing else, with joy!",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Optimisation, not 'shiny-objects-syndrome'",
      desc: "She help you realise and sweat your assets to yield you maximum amount of outcomes. Whether it is your reputation, knowledge, innovative ways of working, they will be 100x times more valuable with Thi as a team member.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "\"Keep the interesting bits for us humans\"",
      desc: "Despite strong passion in automation, she believes in keeping the vital (and fun) strategic decision-making for people. It's the technology that makes our jobs more mesmerising, not taking them away.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
