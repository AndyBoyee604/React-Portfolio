import React from 'react';
import photo from '../../src/images/head.jpg'

const imgStyle = {
    padding: '20px'
}

const linkStyle = {
    color: 'white'
}

function About() {
    return(
        <div class="jumbotron">
  <h1 class="display-4">About Me</h1>
  <img class="headshot" src= {photo} width="450px" height="600px" alt="headshot" style={imgStyle}></img>
  <p class="lead">My name is Nou but you can call me Andy. I've always had an interest in the IT field but never did pursue a degree or certificate relate to IT. Reason being is in the IT field there is so many different careers to choose from but after a few research I decided I would like to become a coder. I have a few friends who are already in it and some that are just starting as well. Which is one of the reason that got me interested in coding but it's also an interesting one, like how just typing in codes can make how a website look and operate. Though I'm sure coding is not a simple thing to learn, I'm sure that after my coding bootcamp I would have learned more than enough to kick start my career in coding and am super excited for this!</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://drive.google.com/file/d/1lJQwFRVji3qOP3E6qcrH2jmC1t4Y-ezu/view?usp=sharing" target="_blank" rel="noreferrer" style={linkStyle}>View Full Resume</a></button>
  </p>
</div>
    )
}

export default About;



