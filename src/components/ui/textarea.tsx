import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = ({ className = "", ...props }: TextareaProps) => <textarea className={`w-full border rounded px-3 py-2 ${className}`} {...props} />;
