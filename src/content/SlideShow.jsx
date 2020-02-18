import React, { Component, Fragment } from 'react';
import a from '../image/dandelion-nature-sunlight-54300.jpg';
export class SlideShow extends Component {
    render() {
        return (
            <Fragment>
               <div>
                   <img src={a} alt="" className="img-fluid mt-1"/>
               </div>
            </Fragment>
        )
    }
}

export default SlideShow
