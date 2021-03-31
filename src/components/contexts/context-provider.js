import React from 'react';
import { ThemeContext, themes, themeNames } from './theme-context';

export default class ThemeContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            theme: !props.theme ? themes.dark : themes[props.theme]
        }
        this.themeNames = themeNames;
    }

    // call when react component start
    componentDidMount() {
       console.log("Props ", this.props);
       console.log("Theme ", this.state.theme);
       console.log("Theme test ", themes[this.props.theme]);
    }

    changeTheme () {
        console.log("ThemeNames", this.themeNames)
        let name = this.themeNames[Math.floor(Math.random() * this.themeNames.length)];
        console.log("Change theme: ", name)

        this.setState(() => {
            return {
                theme: themes[name]
            }
        }, () => {
            console.log("Change theme value: ", this.state.theme)
        })
    }

    render() {
      return <ThemeContext.Provider value={{
          theme: this.state.theme,
          changeTheme: this.changeTheme.bind(this)
      }}>{this.props.children}</ThemeContext.Provider>;
    }
  }