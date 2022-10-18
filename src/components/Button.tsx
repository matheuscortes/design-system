import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean; 
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={'py-4 px-3 bg-cyan-500 rounded font-sans font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors'}
    >
      {children}
    </Comp>    
  )
}