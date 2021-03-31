import React from 'react';
import "./left-menu.scss";
import moment from 'moment';
import ToggleSwitch from '../../components/common/toggle-switch';
import { utilities } from '../../utilities/utilities'
import { ThemeContext, themes } from '../contexts/theme-context';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), toggleValue: false }
    };

    // call when react component start
    componentDidMount() {
        //console.log("Context", this.context)
        setTimeout(() => {
            // utilities.notify.success("Success")
            // utilities.notify.error("Error")
            // utilities.notify.warning("Warning")
            // utilities.notify.info("Warning")
            // utilities.notify.default("Warning")
        }, 1000);
    }

    // call when react component shutdown
    componentWillUnmount() {

    }

    shouldComponentUpdate() {

    }

    handleChangeTheme(callback) {
        this.setState(pre => {
            return {
                toggleValue: !pre.toggleValue
            }
        }, () => {
            console.log("Toggle value: ", this.state.toggleValue)
        })
        callback();
    }

    render() {
        return <ThemeContext.Consumer>
            {({ theme, changeTheme }) => (
                <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: theme.foreground, backgroundImage: theme.background }}>
                    <a class="navbar-brand navbar-brand-custom" href="#">HOMIES</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>*/}
                        </ul>
                        <ToggleSwitch
                            value={this.state.toggleValue}
                            onChangeValue={this.handleChangeTheme.bind(this, changeTheme)}
                            title={'Change your theme'}
                        />
                        {/* <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            )}
        </ThemeContext.Consumer>
    };
}

LeftMenu.contextType = ThemeContext;

export default LeftMenu;