import React, { Component } from 'react';

import GoogleMap from 'google-map-react';

export default class Location extends React.Component {

    static defaultProps = { center: { lat: 50.172366, lng: -122.784098 }, zoom: 8 };

    render() {
        return (
            <div class="col-xs-12">
                <h1>Location</h1>
                <br />
                <p>We are located few miles from Whistler at the Wedge Mountain forests close to the bear community center</p>
                <br />
                <div class="row">
                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2  col-md-6 col-md-offset-3">
                        <GoogleMap defaultCenter={this.props.center} defaultZoom={this.props.zoom} />
                    </div>
                </div>
            </div>
        );
    }

}
