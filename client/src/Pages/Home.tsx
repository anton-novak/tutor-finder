import React from 'react';
import NavBar from '../components/nav-bar';

function Home() {

  return (
    <>
      <NavBar />
      <section className="hero is-link is-halfheight">
        <div className="hero-body">
          <div>
            <p className="title is-spaced">
              TutorFinderTW
            </p>
            <p className="subtitle">
              TutorFinderTW allows you to find tutors based in Taiwan. Here you can find tutors that teach in person or remotely, or even both! A wide variety of subjects/branches are offered by tutors at different prices, and you can even become one yourself for free by registering!
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>TutorFinderTW</strong> by Bosskey International Software Consumer Products Limited Liablity Company.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;