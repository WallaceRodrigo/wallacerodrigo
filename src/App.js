import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './content/projects';

function App() {
  return (
    projects.map((project) => (
      <ProjectCard
      key={ project.name }
      name={ project.name }
      gif={ project.gif }
      description={ project.description }
      link={ project.link }
      github={ project.github }
      />
    ))
  );
}

export default App;
