import React, { Component, Fragment } from 'react'
import Header from '../../content/Header'
import { SlideShow } from '../../content/SlideShow'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Header />
                    <SlideShow />
                
                    <nav className="bg-success mt-1">
                    <div className="row">    
                        <div className="col-md-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus laboriosam, inventore facilis minima, aspernatur amet ratione eligendi repellendus sit accusamus pariatur, quo in tempore deleniti hic exercitationem mollitia quia!
                        </div>
                        <div className="col-md-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus laboriosam, inventore facilis minima, aspernatur amet ratione eligendi repellendus sit accusamus pariatur, quo in tempore deleniti hic exercitationem mollitia quia!
                        </div>
                        <div className="col-md-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus laboriosam, inventore facilis minima, aspernatur amet ratione eligendi repellendus sit accusamus pariatur, quo in tempore deleniti hic exercitationem mollitia quia!
                        </div>
                    </div>
                    </nav>
                
                </div>

            </Fragment>
        )
    }
}

export default Home
