import React, { Component } from 'react';

class Project extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h5>{education.school}</h5>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h5>{work.company}</h5>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var projects = this.props.data.projects.map(function(projects){
          var technology = projects.technologies.map((tech) => <span className= "tech"> {tech}</span>);
          return <div key='${projects.name}'><h5>{projects.name}</h5>
              <p>{projects.description} </p><p>{technology}</p>
               </div>
      })


        var articles = this.props.data.articles.map(function(articles){
            return <div key={articles.title}><h5>{articles.title}</h5>
                <a href={articles.url} target="_blank" className="arrow-read">Read</a>
            </div> })

        var programminglanguages = this.props.data.programminglanguages.map(function (programminglanguages) {
            return <div key={programminglanguages}>
                <p>{programminglanguages} </p>
            </div>
        })

        var frameworks = this.props.data.frameworks.map(function (frameworks) {
            return <div key={frameworks}>
                <p>{frameworks} </p>
            </div>
        })

        var database = this.props.data.database.map(function (database) {
            return <div key={database}>
                <p>{database} </p>
            </div>
        })
        var tools = this.props.data.tools.map(function (tools) {
            return <div key={tools}>
                <p>{tools} </p>
            </div>
        })

        var hpc = this.props.data.hpc.map(function (hpc) {
            return <div key={hpc}>
                <p>{hpc} </p>
            </div>
        })

        var devops = this.props.data.devops.map(function (devops) {
            return <div key={devops}>
                <p>{devops} </p>
            </div>
        })
        var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Featured Projects</span></h1>
         </div>

          <div className="nine columns main-col">
              <div className="row item">
                  <div className="twelve columns">
                      {projects}
                  </div>

              </div>
          </div>


      </div>


          <div className="row work">

              <div className="three columns header-col">
                  <h1><span>Articles</span></h1>
              </div>

              <div className="nine columns main-col">
                  <div className="row item">
                      <div className="twelve columns">
                          {articles}
                      </div>

                  </div>
              </div>


          </div>




          <div className="row skills">
              <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
              </div>

                  <div className="nine columns main-col">
                      <h5><span>Programming Languages</span></h5>
                      <p>{programminglanguages}</p>


                    <h5><span>Frameworks</span></h5>
                    <ul>{frameworks}</ul>



                  <h5><span>Database</span></h5>
                  <ul>{database}</ul>

                  <h5><span>Tools</span></h5>
                  <ul>{tools}</ul>

                  <h5><span>Distributed and Parallel Computing</span></h5>
                  <ul>{hpc}</ul>

                  <h5><span>DevOps</span></h5>
                  <ul>{devops}</ul>

                      <p>
                          <a href="https://drive.google.com/open?id=1lHw1b2Abg2vXVWQS7RFNi5hLhqrPN65_" target="_blank" className="arrow-link">View My
                              Resume</a>
                      </p>

                  </div>

          </div>
   </section>
    );
  }
}

export default Project;
