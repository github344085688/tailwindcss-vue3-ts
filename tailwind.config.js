const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './public/index.html'
    ],
    content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
    darkMode: 'class',  // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'custom': '0 0 #26876c 100px',
            },
            content: {
                'initial': 'initial',
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        minHeight: {
            '40': '40px',
        },
        lineHeight: {
            '40': '40px',
        },
        colors: {
            theme: {
                light: '#ffffff', // light 主题的背景颜色
                dark: '#0b1120', // dark 主题的背景颜色
            },
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            slate: colors.slate,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.blue,
            sky: colors.sky,
            lap: {
                'text': '#006ED0',
            },
            dap: {
                'text': '#338BD9',
            },
            dark: {
                DEFAULT: '#0E1419',
                '50': '#f9fafb',
                '100': '#f3f4f6',
                '200': '#e5e7eb',
                '300': '#d1d5db',
                '400': '#9ca3af',
                '500': '#6b7280',
                '600': '#2D4354',//
                '700': '#324347',//
                '800': '#444545',//
                '900': '#111827',
                '950': '#030712'
            },
            light: {
                DEFAULT: '#f0f1f5',
                '50': '#f9fafb',
                '100': '#f3f4f6',
                '200': '#CCE2F6',//
                '300': '#e9f0f2',//
                '400': '#b6ced3',//
                '500': '#6b7280',
                '600': '#4b5563',
                '700': '#374151',
                '800': '#1f2937',
                '900': '#111827',
                '1000': '#000000'
            },

        },
        opacity: {
            '0': '0',
            '20': '0.2',
            '40': '0.4',
            '60': '0.6',
            '80': '0.8',
            '100': '1',
        },
        spacing: {
            px: '1px',
            0: '0',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
        },
        borderRadius: {
            'none': '0',
            'sm': '.0625rem',
            'md': '.125rem',
            DEFAULT: '.25rem',
            'lg': '.5rem',
            'full': '9999px',
        },
        fontFamily: {
            sans: [
                'Lato',
            ]
        },
        backgroundSize: ({theme}) => ({
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            ...theme('spacing')
        }),

    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
