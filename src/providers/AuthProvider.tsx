"use client"
import { SessionProvider } from 'next-auth/react';
import * as React from 'react';

export interface IAuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider(props: IAuthProviderProps) {
  return (
    <SessionProvider>
      {props.children}
    </SessionProvider>
  );
}
