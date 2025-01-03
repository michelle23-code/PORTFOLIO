tailwind.config = {
    theme: {
        extend:{
        gridTemplateColumns:{
            'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "sans-serif"],
        },
        animation:{
             spin_slow: 'spin 6s linear infinite',
        },
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#2a204a',
        }
    }
}
}