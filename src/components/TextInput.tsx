import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

const textProps = 'bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className={`py-4 flex items-center gap-3 h-12 px-3 ${textProps} focus-within:ring-2 ring-cyan-300 outline-none rounded`}>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={`bg-transparent outline-none flex-1 ${textProps}`}
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'; 

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}; 