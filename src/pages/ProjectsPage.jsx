import ProjectsPlaceholder from "../components/projects/ProjectsPlaceholder";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ProjectsPage = () => {
  useDocumentTitle("Projets");
  return <ProjectsPlaceholder />;
};

export default ProjectsPage;
