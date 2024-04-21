"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';

interface IContentProps {
  content: string;
}

const Content: React.FunctionComponent<IContentProps> = (props) => {
//   const [render, setRender] = useState(false);
//   useEffect(() => {
//     setRender(true);
//  }, []);
  return (
    <div suppressHydrationWarning className="text-md font-light">
      <div className="prose text-foreground" dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  );
};

export default Content;
