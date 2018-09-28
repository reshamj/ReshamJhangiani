import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var networks= this.props.data.social.map(function(network){
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic"  src={profilepic} alt="Resham Jhangiani" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <br />
                    <div className="row">
                        <div className="columns contact-details">
                            <p className="address">
                                <ul className="social ">{networks}</ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
  }
}


export default About;
