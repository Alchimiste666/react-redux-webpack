import React from 'react';

export default class Contacts extends React.Component {

    render() {
        return (
            <div class="col-xs-12">
                <h1>Contacts</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h3>Join the bear community</h3>
                            <hr class="star-primary" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <form name="sentMessage" id="contactForm">
                                <div class="row control-group">
                                    <div class="form-group col-xs-12 ">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div class="row control-group">
                                    <div class="form-group col-xs-12 ">
                                        <label>Email Address</label>
                                        <input type="email" class="form-control" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div class="row control-group">
                                    <div class="form-group col-xs-12 ">
                                        <label>Phone Number</label>
                                        <input type="tel" class="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div class="row control-group">
                                    <div class="form-group col-xs-12 ">
                                        <label>Message</label>
                                        <textarea rows="5" class="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div class="row">
                                    <div class="form-group col-xs-12">
                                        <button type="submit" class="btn btn-success btn-lg">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}