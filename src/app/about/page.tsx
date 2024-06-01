import * as React from 'react';
import Image from 'next/image';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 mt-8">
      <h2 className="text-2xl font-bold text-center">The IT Maestro, Music Enthusiast, and Adventurer</h2>
      <div className='flex flex-col items-center gap-8'>
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          <div className='flex flex-col flex-[2] gap-4 justify-start'>
            <h3 className="text-xl font-bold text-center md:text-left">Information Technology</h3>
            <p className="text-base font-light text-justify">
            Hello, World! I’m the human version of a Swiss Army knife in the tech universe. By day, I’m a developer, juggling code like a circus performer and making software bend to my will. I’ve got a passion for all things IT, and I’m always on the lookout for the next big thing in tech town.
            </p>
          </div>
          <div className='relative flex-[1] transform transition-transform duration-500 hover:scale-105'>
            <Image className='border-4 border-white rounded shadow-md' src="/me-profile.jpg" alt="Code Musician" height={250} width={250} />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row-reverse">
          <div className='flex flex-col flex-[2] gap-8 justify-start'>
            <h3 className="text-xl font-bold text-center md:text-right">Music</h3>
            <p className="text-base font-light text-justify">
            When I’m not busy being a binary whisperer, you can find me orchestrating symphonies of sound. I’m a maestro of multiple instruments, and my vocals aren’t too shabby either. Check out my YouTube channel to see me in action; it’s where I hit the high notes and the like button collides.
            </p>
          </div>
          <div className='relative flex-[1] transform transition-transform duration-500 hover:scale-105'>
            <Image className='border-4 border-white rounded shadow-md' src="/me-guitar.jpg" alt="Code Musician" height={250} width={250} />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-4 md:flex-row">
          <div className='flex flex-col flex-[2] gap-8 justify-between'>
            <h3 className="text-xl font-bold text-center md:text-left">Sailing</h3>
            <p className="text-base font-light text-justify">
            When I’m not debugging, I’m navigating the open seas with my first mate—my son. Together, we hoist the sails, chase sunsets, and decode the wind’s secrets. Sailing isn’t just about coordinates; it’s about finding your true north.
            </p>
          </div>
          <div className='relative flex-[1] transform transition-transform duration-500 hover:scale-105'>
            <Image className='border-4 border-white rounded shadow-md' src="/me-captain.jpeg" alt="Code Musician" height={300} width={300} />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row-reverse">
          <div className='flex flex-col flex-[2] gap-8 justify-start'>
            <h3 className="text-xl font-bold text-center md:text-right">Hiking Highs </h3>
            <p className="text-base font-light text-justify">
            Mountains call my name like a forgotten variable. Whether it’s scaling peaks or exploring forest trails, I’m in my element. The syntax of nature—trees, rocks, and winding paths—speaks to me. And yes, I’ve debugged a stubborn trail marker or two.
            </p>
          </div>
          <div className='relative flex-[1] transform transition-transform duration-500 hover:scale-105'>
            <Image className='border-4 border-white rounded shadow-md' src="/me-hiking.png" alt="Code Musician" height={250} width={250} />
          </div>
        </div>
      </div>
      <p className="text-sm font-light">
      So, if you’re into deciphering code, serenades, or sea shanties, you’ve dropped anchor at the right blog. Welcome aboard, and let’s set sail on this adventure together!
      Feel free to ask me anything else! Let’s keep the conversation humming like a well-optimized algorithm
      </p>
    </section>
  );
};

export default About;
