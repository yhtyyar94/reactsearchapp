import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';

function App() {
	return (
		<Router>
			<React.Fragment>
				<NavBar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Index}/>
          </Switch>
        </div>
			</React.Fragment>
		</Router>
	);
}

export default App;
