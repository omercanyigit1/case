import { ReactNode } from 'react';

//components
import { Navbar } from "@/components/Navbar/Navbar";

//styles
import classes from './Layout.module.scss';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
}
