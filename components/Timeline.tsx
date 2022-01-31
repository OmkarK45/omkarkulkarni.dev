import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Year>2020</Year>
    <ul>
      <Step title="Learnt React.JS">
        I was a little confused about React.JS, but I was able to learn it
        during summers of 2020. I initially strugged with JavaScript but as soon
        as I started writing more code, I got really good at it!
      </Step>

      <Step title="Learnt about web development.">
        I purchased an udemy course which provided me with a solid foundation in
        web development. I'm thankful to Colt Steele for creating that awesome
        web development course.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="First program.">
        I learnt about C++ and Python in my college and I started learning to
        code. I remember creating small calculator programs in C++ and Python.
      </Step>
      <Step title="Took admission in college.">
        I took admission in an engineering college and chose Computer
        Engineering as my branch.
      </Step>
      <Step title="Failed to crack IIT-JEE in my second attempt.">
        I was prepared this time around, but I failed to crack it again.
        Realized that failures are a part of life and that there's more to life
        as well.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Completed +2 Education from Junior College">
        Finished my HSC Course with A+ grade.
      </Step>
      <Step title="Failed in my first attempt to crack IIT-JEE">
        I tried to crack IIT JEE Examination. This was one of the lowest career
        points. I gathered enough courage to give it another shot.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Completed High School Education">
        Finished SSC Boards with 94% and I was state topper in mathematics.
      </Step>
      <Step title="Started preparation for IIT-JEE">
        IIT always attracted me as a student and I decided to take the IIT-JEE
        entrance exam.
      </Step>
    </ul>
    <Divider />
    <Year>2009</Year>
    <ul>
      <Step title="First Computer">
        I remember many nights playing Grand Theft Auto. I was a kid, and I
        wanted to be a computer programmer.
      </Step>
    </ul>
    <Divider />

    <Year>1999</Year>
    <ul>
      <Step title="Born 👶🏼" />
    </ul>
    <Divider />
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Started Looking for my next adventure.">
          I gathered enough experience from my first internship @ neoG Camp. It
          is now time to find my next destination.
        </Step>
        <Step title="Joined neoG Camp as Web Development Intern">
          I joined neoG Camp as a Full stack web development intern. I worked
          with other developers to work on a project that would help neoG Camp
          admit new students into the bootcamp. This was my first time working
          on a real world product that would be used by so many users.
        </Step>
        <Step title="Joined neoG Bootcamp.">
          It was time to upskill and upgrade my skills to next level. I heard
          about neoG Camp from my friends and I enrolled in the program. It is a
          serious program that teaches you how to develop good coding habits.
          Made a lot of friends and got a lot of experience.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
