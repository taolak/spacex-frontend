import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
    processRefresh, 
    resetPayload 
} from '../../actions/flightActions'
import refresh from '../../../assets/images/refresh.svg'
import link from '../../../assets/images/link.svg'
import placeholder from '../../../assets/images/placeholder.png'
import './flight.css'

class Flight extends Component {
    
    state = { land_success: false, reused: false, with_reddit: false }
    
    altImagePlaceholder = (e) => {
        e.target.src = placeholder;
        e.target.onerror = null;
    }

    landSuccess = (e) => {
        this.setState({ land_success: e.target.checked })
        this.refresh()
    }

    reused = (e) => {
        this.setState({ reused: e.target.checked })
        this.refresh()
    }

    withReddit = (e) => {
        this.setState({ with_reddit: e.target.checked })
        this.refresh()
    }

    refresh = () => {
        this.props.resetPayload()

        setTimeout(() => {
            this.props.processRefresh(this.state)
        }, 500) 
    }

    render() {
        const flightItems = this.props.flights.map(flight => (
            <div className='row' key={flight.flight_number}>
                <div><img src={flight.links.mission_patch_small} onError={this.altImagePlaceholder} alt='rocket-img' /></div>
                <div>{flight.rocket.rocket_name}</div>
                <div>{flight.rocket.rocket_type}</div>
                <div>{flight.launch_date_local.split('T')[0]}</div>
                <div id='details'>{flight.details}</div>
                <div>{flight.flight_number}</div>
                <div>
                    <a href={flight.links.article_link} target='_blank' rel='noopener noreferrer'>
                        <img id='link' src={link} alt='link' draggable='false' />
                    </a>
                </div>
            </div>
        ))

        return (
            <div>
                <section>
                    <header className='flight-header'>
                        <div className='top'>
                            <div>
                                <a href='#/refreshed' onClick={this.refresh}>
                                    <img src={refresh} alt='refresh' draggable="false" />
                                </a>
                            </div>
                            <div id='checkboxes'>
                                <input type='checkbox' name='land-success-checkbox' id='land-success-checkbox' checked={this.state.land_success} onChange={this.landSuccess} />
                                <label htmlFor='land-success-checkbox'></label>
                                <span>LAND SUCCESS</span>

                                <input type='checkbox' name='reused-checkbox' id='reused-checkbox' checked={this.state.reused} onChange={this.reused} />
                                <label htmlFor='reused-checkbox'></label>
                                <span>REUSED</span>

                                <input type='checkbox' name='with-reddit-checkbox' id='with-reddit-checkbox' checked={this.state.with_reddit} onChange={this.withReddit} />
                                <label htmlFor='with-reddit-checkbox'></label>
                                <span>WITH REDDIT</span>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div>Badge</div>
                            <div>Rocket Name</div>
                            <div>Rocket Type</div>  
                            <div>Launch Date</div>
                            <div>Details</div>
                            <div>ID</div>
                            <div>Article</div>
                        </div>
                    </header>
                    <article className='flight-content'>
                        {flightItems}
                    </article>
                </section>
            </div>
        )
    }
}

Flight.propTypes = {
    processRefresh: PropTypes.func.isRequired,
    resetPayload: PropTypes.func.isRequired,
    flights: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    flights: state.flights.items
})
export default connect(mapStateToProps, { 
    processRefresh, 
    resetPayload 
})(Flight)
