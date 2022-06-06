import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length >1 ?<p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href="{props.links[0]}">{props.links.github}</a>
      <a href="{props.links[1]}">{props.links.linkedin}</a>
    </div>
  );
}

export default About;
