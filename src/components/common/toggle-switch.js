import React from 'react';
import './toggle-switch.scss'

class ToogleSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onChangeValue, title } = this.props;
        return <label class="switch" title={title}>
            <input type="checkbox"
                defaultChecked={value}
                value={value} onChange={onChangeValue}
            />
            <span class="slider round"></span>
        </label>
    }
}

export default ToogleSwitch;