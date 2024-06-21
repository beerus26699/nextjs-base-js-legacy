import clsx from 'clsx';
import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string;
    label: string;
}

const Input = React.forwardRef(
    (
        {
            type = 'text',
            name,
            className,
            label,
            title,
            value,
            ...rest
        }: TextInputProps,
        ref: any
    ) => {
        const id = `id_input_${name}_${['checkbox', 'radio'].includes(type) ? value : ''}`;
        return (
            <div>
                {label && <div className="font-semibold mb-1">{label}</div>}
                <input
                    type={type}
                    className={clsx(
                        'p-2 text-gray-700 border border-blue-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-blue-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-600',
                        className,
                        {
                            'block w-full': type == 'text',
                        }
                    )}
                    id={id}
                    name={name}
                    value={value}
                    ref={ref}
                    {...rest}
                />
                {title && (
                    <label htmlFor={id} className="ml-1">
                        {title}
                    </label>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
