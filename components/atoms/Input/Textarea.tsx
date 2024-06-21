import clsx from 'clsx';
import React from 'react';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const Textarea = React.forwardRef(
    ({ name, className, label, ...rest }: TextAreaProps, ref: any) => {
        return (
            <div>
                {label && <div className="font-semibold mb-1">{label}</div>}
                <textarea
                    rows={3}
                    className={clsx(
                        'block w-full p-2 text-gray-700 border border-blue-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-blue-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-600',
                        className
                    )}
                    name={name}
                    ref={ref}
                    {...rest}
                />
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;
