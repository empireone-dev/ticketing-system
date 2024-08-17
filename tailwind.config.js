import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'border-glow': 'border-glow 1s infinite',
            },
            keyframes: {
                'border-glow': {
                    '0%, 100%': { 
                        'box-shadow': '0 0 10px 2px #FFFF00', 
                    },
                    '50%': { 
                        'box-shadow': '0 0 20px 2px #FF0000', 
                    },
                },
            },
        },
    },

    plugins: [forms],
};
