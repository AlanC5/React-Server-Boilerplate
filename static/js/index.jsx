import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class Hello extends React.Component {
	render() {
    	return <div>
        <h1>Get Ready for a New Project!</h1>
    	</div>
  	}
}

ReactDOM.render(<Hello sensors = {window.props}/>, document.getElementById('root'));