import React from 'react';
export const themeNames = ["orange", "green_yellow", "light_blue",'light_pastel'];
export const themes = {
    green_yellow: {
        foreground: '#85FFBD',
        background: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
        child: {
            'color': '#85FFBD',
            'image': 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
        }
    },
    light_pastel: {
        foreground: '#8EC5FC',
        background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        child: {
            'color': '#8EC5FC',
            'image': 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        }
    },
    light_blue: {
        foreground: '#8BC6EC',
        background: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        child: {
            'color': '#8BC6EC',
            'image': 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        }
    },
    orange: {
        foreground: '#FBAB7E',
        background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        child: {
            'color': '#FBAB7E',
            'image': 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        }
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark, 
    changeTheme: () => {}
});
