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
            darkTheme: '#11001f',
        },
        boxShadow:{
            'black':'4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        }
   }
   
},
  darkMode: 'selector'
}