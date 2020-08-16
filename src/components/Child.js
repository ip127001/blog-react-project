import React from 'react';

class Child extends React.Component {
    delay() {
        console.log('[Delay] function called');

        for(let i = 0; i < 5000000000; i++) {
            i++;
        }
        return 'delayed text';
    }

    render() {
        console.log('[Child] rendered');

        return (
            <div className="child">
                <hr />
                <div>{this.delay()}</div>
                Selected Color: {this.props.color}
            </div>
        )
    }
}

export default Child;