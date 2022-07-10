tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      animation: {
        sec: 'sec 1s ease-in forwards',
        min: 'min 1s ease-in forwards',
      },
      keyframes: {
        sec: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-4.5rem)',
          },
        },
        min: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-8rem)',
          },
        },
      },
    },
  },
};
