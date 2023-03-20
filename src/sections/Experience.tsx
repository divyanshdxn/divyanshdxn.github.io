import { Experience, myExperiences } from '../data/Experiences';
import { useState } from 'react';

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  const [selectedTab, setSelectedTab] = useState<'work' | 'about'>('work');
  const selectedTabModifier = 'bg-amber-500 text-zinc-900';
  const idleTabModifier = 'border border-amber-500 text-white';

  return (
    <div
      className={`w-full md:w-96 flex flex-col gap-8 justify-start bg-zinc-900 p-8 rounded-3xl transition-all`}
    >
      {/* Title and Duration section */}
      <div className={`flex flex-col gap-8`}>
        <div>
          <p className={`text-xl font-bold`}>{experience.title}</p>
          <p className={`opacity-50 mt-2`}>{experience.organisation}</p>
          <p className={`opacity-50 mt-2`}>{experience.duration}</p>
        </div>
        {/*<a href=''>*/}
        {/*  <button className='rounded-full border border-amber-500 px-4 py-2'>Remote</button>*/}
        {/*</a>*/}
      </div>

      {/* Work and About section */}
      <div className={``}>
        <div className={`flex gap-4`}>
          <button
            className={`rounded-full  ${
              selectedTab == 'work' ? selectedTabModifier : idleTabModifier
            } px-4 py-2 `}
            onClick={(e) => setSelectedTab('work')}
          >
            Work
          </button>
          {experience.about && (
            <button
              className={`rounded-full  ${
                selectedTab == 'about' ? selectedTabModifier : idleTabModifier
              } px-4 py-2 `}
              onClick={(_) => setSelectedTab('about')}
            >
              About
            </button>
          )}
        </div>
        {selectedTab == 'work' ? (
          <ul className={`mt-4 list-disc text-sm opacity-75`}>
            {experience.desc.map((str) => (
              <li>{str}</li>
            ))}
          </ul>
        ) : (
          <p className={`mt-4 text-sm  opacity-75`}>
            {experience.about}
          </p>
        )}
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section
      id={`section`}
      className={`flex flex-col gap-16 p-8`}
    >
      <p className={`text-4xl font-bold`}>Experience</p>
      <div className={`flex flex-wrap gap-8 justify-evenly`}>
        {myExperiences.map((exp) => (
          <ExperienceCard experience={exp} />
        ))}
      </div>

    </section>
  );
};
