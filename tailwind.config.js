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
                dark: '#1e1f22', // dark 主题的背景颜色
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
            primary: {
                DEFAULT: '#FFFFFF',
                '100': '#F9F9F9',
                '200': '#CECECE',
                '300': '#F2F2F7',
                '400': '#DADADA',
                '500': '#989A9C',
                '600': '#88898B',
                '700': '#777879',
                '800': "#444545",
                '900': "#303131"
            },
            secondary: {
                DEFAULT: '#FFFFFF',
                '100': '#f9f9f9',
                '200': '#e9f0f2',
                '300': '#d3e2e5',
                '400': '#CCE2F6',
                '500': '#B6CED3',
                '600': '#7ca7b1',
                '700': "#6d9da8",
                '800': "#488492"
            },
            accent: {
                DEFAULT: '#FFFFFF',
                '100': '#f9f9f9',
                '200': '#e9f0f2',
                '300': '#d3e2e5',
                '400': '#CCE2F6',
                '500': '#B6CED3',
                '600': '#7ca7b1',
                '700': "#6d9da8",
                '800': "#488492"
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
