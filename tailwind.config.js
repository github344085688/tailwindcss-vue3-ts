const colors = require('tailwindcss/colors')
const svgToDataUri = require("mini-svg-data-uri");
const {default: flattenColorPalette} = require('tailwindcss/lib/util/flattenColorPalette');
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    purge: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './public/index.html'
    ],
    content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
    darkMode: 'class',  // or 'media' or 'class'
    theme: {
        // `demo-*` screens are used for the "mobile-first" responsive demo
        screens: {
            sm: '640px',
            'demo-sm': '720px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
            14: '14',
            15: '15',
            16: '16',
        },
        extend: {
            colors: {
                code: {
                    highlight: 'rgb(125 211 252 / 0.1)',
                },
                theme: {
                    light: '#f6f6f6',
                    dark: '#333333',
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
                    '300': '#f4f4f4',
                    '400': '#DADADA',
                    '500': '#989A9C',
                    '600': '#88898B',
                    '700': '#444545',
                    '800': "#292929",
                    '900': "#1b1b1b"
                },
                secondary: {
                    DEFAULT: '#FFFFFF',
                    '100': '#f9f9f9',
                    '200': '#e9f0f2',
                    '300': '#b6cede',
                    '400': '#a6bbc9',
                    '450': '#5b9bb4',
                    '500': '#97aab7',
                    '550': '#465d66',
                    '600': '#7C8C98',
                    '650': '#363636',
                    '700': "#6f7e88",
                    '800': "#535e65"
                },
                accent: {
                    DEFAULT: '#fafeff',
                    '10': '#59b3e7',
                    '50': '#1094d7',
                    '100': '#ef705b',
                    '150': '#e16588',
                    '200': '#ce954a',
                    '250': '#ea7724',
                    '300': '#56bb4d',
                    '350': '#34a097',
                    '400': '#487cb5',
                    '450': '#669db3',
                    '500': '#1d8ec7',
                    '550': '#5151c0',
                    '700': "#465d66",
                    '800': "#535e65",
                    '900': "#47484b"
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
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: theme('colors.slate.700'),
                        hr: {
                            borderColor: theme('colors.slate.100'),
                            marginTop: '3em',
                            marginBottom: '3em',
                        },
                        'h1, h2, h3': {
                            letterSpacing: '-0.025em',
                        },
                        h2: {
                            marginBottom: `${16 / 24}em`,
                        },
                        h3: {
                            marginTop: '2.4em',
                            lineHeight: '1.4',
                        },
                        h4: {
                            marginTop: '2em',
                            fontSize: '1.125em',
                        },
                        'h2 small, h3 small, h4 small': {
                            fontFamily: theme('fontFamily.mono').join(', '),
                            color: theme('colors.slate.500'),
                            fontWeight: 500,
                        },
                        'h2 small': {
                            fontSize: theme('fontSize.lg')[0],
                            ...theme('fontSize.lg')[1],
                        },
                        'h3 small': {
                            fontSize: theme('fontSize.base')[0],
                            ...theme('fontSize.base')[1],
                        },
                        'h4 small': {
                            fontSize: theme('fontSize.sm')[0],
                            ...theme('fontSize.sm')[1],
                        },
                        'h2, h3, h4': {
                            'scroll-margin-top': 'var(--scroll-mt)',
                        },
                        'h2 code, h3 code': {
                            font: 'inherit',
                        },
                        ul: {
                            listStyleType: 'none',
                            paddingLeft: 0,
                        },
                        'ul > li': {
                            position: 'relative',
                            paddingLeft: '1.75em',
                        },
                        'ul > li::before': {
                            content: '""',
                            width: '0.75em',
                            height: '0.125em',
                            position: 'absolute',
                            top: 'calc(0.875em - 0.0625em)',
                            left: 0,
                            borderRadius: '999px',
                            backgroundColor: theme('colors.slate.300'),
                        },
                        a: {
                            fontWeight: theme('fontWeight.semibold'),
                            textDecoration: 'none',
                            borderBottom: `1px solid ${theme('colors.sky.300')}`,
                        },
                        'a:hover': {
                            borderBottomWidth: '2px',
                        },
                        'a code': {
                            color: 'inherit',
                            fontWeight: 'inherit',
                        },
                        strong: {
                            color: theme('colors.slate.900'),
                            fontWeight: theme('fontWeight.semibold'),
                        },
                        'a strong': {
                            color: 'inherit',
                            fontWeight: 'inherit',
                        },
                        kbd: {
                            background: theme('colors.slate.100'),
                            borderWidth: '1px',
                            borderColor: theme('colors.slate.200'),
                            padding: '0.125em 0.25em',
                            color: theme('colors.slate.700'),
                            fontWeight: 500,
                            fontSize: '0.875em',
                            fontVariantLigatures: 'none',
                            borderRadius: '4px',
                            margin: '0 1px',
                        },
                        code: {
                            fontWeight: theme('fontWeight.medium'),
                            fontVariantLigatures: 'none',
                        },
                        pre: {
                            color: theme('colors.slate.50'),
                            borderRadius: theme('borderRadius.xl'),
                            padding: theme('padding.5'),
                            boxShadow: theme('boxShadow.md'),
                            display: 'flex',
                            marginTop: `${20 / 14}em`,
                            marginBottom: `${32 / 14}em`,
                        },
                        'p + pre': {
                            marginTop: `${-4 / 14}em`,
                        },
                        'pre + pre': {
                            marginTop: `${-16 / 14}em`,
                        },
                        'pre code': {
                            flex: 'none',
                            minWidth: '100%',
                        },
                        table: {
                            fontSize: theme('fontSize.sm')[0],
                            lineHeight: theme('fontSize.sm')[1].lineHeight,
                        },
                        thead: {
                            color: theme('colors.slate.700'),
                            borderBottomColor: theme('colors.slate.200'),
                        },
                        'thead th': {
                            paddingTop: 0,
                            fontWeight: theme('fontWeight.semibold'),
                        },
                        'tbody tr': {
                            borderBottomColor: theme('colors.slate.100'),
                        },
                        'tbody tr:last-child': {
                            borderBottomWidth: '1px',
                        },
                        'tbody code': {
                            fontSize: theme('fontSize.xs')[0],
                        },
                        'figure figcaption': {
                            textAlign: 'center',
                            fontStyle: 'italic',
                        },
                        'figure > figcaption': {
                            marginTop: `${12 / 14}em`,
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.slate.400'),
                        'h2, h3, h4, thead th': {
                            color: theme('colors.slate.200'),
                        },
                        'h2 small, h3 small, h4 small': {
                            color: theme('colors.slate.400'),
                        },
                        kbd: {
                            background: theme('colors.slate.700'),
                            borderColor: theme('colors.slate.600'),
                            color: theme('colors.slate.200'),
                        },
                        code: {
                            color: theme('colors.slate.200'),
                        },
                        hr: {
                            borderColor: theme('colors.slate.200'),
                            opacity: '0.05',
                        },
                        pre: {
                            boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
                        },
                        a: {
                            color: theme('colors.white'),
                            borderBottomColor: theme('colors.sky.400'),
                        },
                        strong: {
                            color: theme('colors.slate.200'),
                        },
                        thead: {
                            color: theme('colors.slate.300'),
                            borderBottomColor: 'rgb(148 163 184 / 0.2)',
                        },
                        'tbody tr': {
                            borderBottomColor: 'rgb(148 163 184 / 0.1)',
                        },
                        blockQuote: {
                            color: theme('colors.white'),
                        },
                    },
                },
            }),
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
                source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
                'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
            },
            spacing: {
                18: '4.5rem',
                full: '100%',
            },
            maxWidth: {
                '8xl': '90rem',
            },
            keyframes: {
                'flash-code': {
                    '0%': {backgroundColor: 'rgb(125 211 252 / 0.1)'},
                    '100%': {backgroundColor: 'transparent'},
                },
            },
            animation: {
                'flash-code': 'flash-code 1s forwards',
                'flash-code-slow': 'flash-code 2s forwards',
            },
            backgroundImage: (theme) => ({
                squiggle: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
                        'colors.yellow.400'
                    )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
                )}")`,
            }),
        },


    },
    variants: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms')({strategy: 'class'}),
        function ({addVariant}) {
            addVariant(
                'supports-backdrop-blur',
                '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
            )
            addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)')
            addVariant('children', '& > *')
            addVariant('scrollbar', '&::-webkit-scrollbar')
            addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
            addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
            addVariant('demo-dark', '.demo-dark &')
        },
        function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'bg-grid': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    highlight: (value) => ({boxShadow: `inset 0 1px 0 0 ${value}`}),
                    'highlight-r': (value) => ({boxShadow: `inset -1px 0px ${value}`}),
                    'highlight-l': (value) => ({boxShadow: `inset 1px 0px ${value}`}),
                    'highlight-b': (value) => ({boxShadow: `inset  0px -1px ${value}`}),
                },
                {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
            )
        },
        function ({addUtilities, theme}) {
            let backgroundSize = '7.07px 7.07px'
            let backgroundImage = (color) =>
                `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`
            let colors = Object.entries(theme('backgroundColor')).filter(
                ([, value]) => typeof value === 'object' && value[400] && value[500]
            )

            addUtilities(
                Object.fromEntries(
                    colors.map(([name, colors]) => {
                        let backgroundColor = colors[400] + '1a' // 10% opacity
                        let stripeColor = colors[500] + '80' // 50% opacity

                        return [
                            `.bg-stripes-${name}`,
                            {
                                backgroundColor,
                                backgroundImage: backgroundImage(stripeColor),
                                backgroundSize,
                            },
                        ]
                    })
                )
            )

            addUtilities({
                '.bg-stripes-white': {
                    backgroundImage: backgroundImage('rgba(255 255 255 / 0.75)'),
                    backgroundSize,
                },
            })

            addUtilities({
                '.ligatures-none': {
                    fontVariantLigatures: 'none',
                },
            })
        },
    ],
}

function calculateDividedColor(color, divisor) {
    // 自定义函数用于计算颜色的除法
    // 这里使用了一个简单的示例，将颜色的每个通道值除以除数
    const parsedColor = color.slice(1); // 去除颜色值前面的 #
    const r = parseInt(parsedColor.substr(0, 2), 16);
    const g = parseInt(parsedColor.substr(2, 2), 16);
    const b = parseInt(parsedColor.substr(4, 2), 16);
    const dividedR = Math.round(r / divisor);
    const dividedG = Math.round(g / divisor);
    const dividedB = Math.round(b / divisor);
    return `#${dividedR.toString(16)}${dividedG.toString(16)}${dividedB.toString(16)}`;
}

function convertColorWithOpacity(color, opacity) {
    // 移除颜色代码中的 '#'
    color = color.replace('#', '');

    // 将颜色代码拆分为红色、绿色和蓝色的十六进制值
    var red = color.substr(0, 2);
    var green = color.substr(2, 2);
    var blue = color.substr(4, 2);

    // 将透明度值从十进制转换为十六进制，并确保它是两位数
    opacity = opacity.toString(16).padStart(2, '0');

    // 组合红色、绿色、蓝色和透明度，生成新的颜色代码
    var newColor = '#' + red + green + blue + opacity;

    return newColor;
}
