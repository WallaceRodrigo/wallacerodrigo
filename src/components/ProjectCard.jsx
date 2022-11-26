import React from "react";

class ProjectCard extends React.Component {
  render() {
    const { name, gif, description, link, github } = this.props;
    return (
      <ul>
        <li>
          <h3>{ name }</h3>
          <img src={ gif } alt={`${name} video`} />
          <p>{ description }</p>
          <div id="project-links">
            <a href={ link } rel="noreferrer" className="white" target="_blank">
              <i className="bi bi-window-plus"></i>
            </a>
            <a href={ github } rel="noreferrer" className="white" target="_blank">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </li>
      </ul>
    )
  }
}

export default ProjectCard;