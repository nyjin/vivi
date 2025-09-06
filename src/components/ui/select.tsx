import React, { useState } from 'react';

interface SelectProps {
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

interface SelectValueProps {
  placeholder?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
  open?: boolean;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
  setOpen?: (open: boolean) => void;
}

export const Select = ({ onValueChange, children }: SelectProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" data-open={open}>
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement<any>, { onValueChange, open, setOpen })
      )}
    </div>
  );
};

export const SelectTrigger = ({ className = "", children, open, setOpen, ...props }: SelectTriggerProps) => (
  <button
    type="button"
    className={`w-full border rounded px-3 py-2 text-left ${className}`}
    onClick={() => setOpen?.(!open)}
    {...props}
  >
    {children}
  </button>
);

export const SelectValue = ({ placeholder }: SelectValueProps) => <span>{placeholder}</span>;

export const SelectContent = ({ children, open }: SelectContentProps) =>
  open ? <div className="absolute top-full w-full border bg-white rounded shadow-lg z-10">{children}</div> : null;

export const SelectItem = ({ value, children, onValueChange, setOpen }: SelectItemProps) => (
  <div
    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => {
      onValueChange?.(value);
      setOpen?.(false);
    }}
  >
    {children}
  </div>
);
