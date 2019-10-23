import React, { Component } from 'react'
import '../scss/styles.css'
import { Provider } from 'react-redux'
import store from './store'
import Flight from './components/flight/flight'


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="app" className="page-wrapper">
					<h1>SpaceX Launches</h1>
					<Flight />
				</div>
			</Provider>
		)
	}
}

export default App
