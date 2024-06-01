import * as React from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Code Musician Blog',
  description: 'A blog about IT, code, music and everything in between.',
  openGraph: {
    title: 'Code Musician Blog',
    description: 'A blog about IT, code, music and everything in between.',
    url: 'https://www.codemusician.dev',
    type: 'website',
    images: [
      {
        url: 'https://www.codemusician.dev/images/codemusicianlogo.png',
      },
    ],
  },
}

interface IContactsProps {
}

const Contacts: React.FunctionComponent<IContactsProps> = (props) => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 mt-8">
      <h2 className="text-2xl font-bold text-center">My Contact details</h2>
      <div className='flex flex-col items-center gap-8'>
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          <div className='flex flex-col flex-[2] gap-4 justify-start'>
            <p className="text-base font-light text-justify">
              You can reach me at <a className='text-accent' href="mailto:fukszon.kostya@gmail.com">fukszon.kostya@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
