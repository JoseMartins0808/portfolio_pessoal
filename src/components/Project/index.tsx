import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  StackList,
} from "./style";

import { Text } from "@/styles/Text";
import { FaGithub, FaShare, FaLinkedin } from "react-icons/fa";
import { projects } from "../../utils/projectsData";
import { ProjectStackItems } from "./ProjectStack";

export const Project = (): JSX.Element => {

  return (
    <>
      {projects.map((repository, index) => (
        <ProjectWrapper key={"project" + index}>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
            style={{ textDecoration: "underline" }}
          >
            {repository.title}
          </Text>

          {repository.language && (
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )}

          <Text type="body2" color="grey2">
            Tecnologias Aplicadas:
          </Text>
          <StackList>
            {repository.stacks.map((stack, index) =>

              <ProjectStackItems title={stack.title} icon={stack.img} key={"stack" + repository.title + index} />
              // <Stack title={stack.title} icon={stack.img} />
            )}
          </StackList>


          <Text type="body1" color="grey2">
            {repository.description}
          </Text>
          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.gitLink}>
              <FaGithub /> Repositório
            </ProjectLink>
            {repository.deployLink && (
              <ProjectLink target="_blank" href={repository.deployLink}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
            {repository.linkedIn && (
              <ProjectLink target="_blank" href={repository.linkedIn}>
                <FaLinkedin /> Publicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};
