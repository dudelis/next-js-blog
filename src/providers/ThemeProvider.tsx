"use client"

import { IThemeContext, ThemeContext } from '@/context/ThemeContext';
import * as React from 'react';

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<IThemeProviderProps> = ({children}) => {
    const {theme} = React.useContext(ThemeContext) as IThemeContext;
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(()=>setMounted(true),[])
    if (mounted){
      return <div className={theme}>{children}</div>;
    }
  
};

export default ThemeProvider;
