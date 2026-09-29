tailwind.config = {
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#FAF7EE',
                    100: '#F3EDD7',
                    200: '#E6D5A8',
                    300: '#D5BA74',
                    DEFAULT: '#B89758',
                    dark: '#8C6F35',
                },
                charcoal: {
                    50: '#F8F9FA',
                    100: '#F1F3F5',
                    800: '#1E293B',
                    DEFAULT: '#111827',
                    dark: '#0B0F17',
                    muted: '#6B7280',
                    subtle: '#9CA3AF'
                },
                sand: {
                    50: '#FAF9F6',
                    100: '#F3F2EC',
                    200: '#E8E6DB'
                }
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            boxShadow: {
                'soft-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.04)',
                'soft-xl': '0 30px 60px -12px rgba(0, 0, 0, 0.07)',
                'gold-glow': '0 10px 30px -5px rgba(184, 151, 88, 0.25)'
            }
        }
    }
}
