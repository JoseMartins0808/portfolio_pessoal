// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";

import { useContext, useState } from "react";
import { AppContext } from "./../../providers/appProvider";
import { StackModal } from "@/components/StackModal";
import useMedia from "use-media";

export const Home = (): JSX.Element => {

  const { languageText } = useContext(AppContext);
  const [modalStack, setModalStack] = useState<boolean>(false);
  const [stackNumber, SetStackNumber] = useState<number | null>(null);
  const isWide = useMedia({ maxWidth: "991px" });

  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              {languageText.apresentationTitle}
            </Text>
            <Text type="body1" color="grey6">
              {languageText.apresentationDescription}
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                {languageText.apresentationButtons[0]}
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                {languageText.apresentationButtons[1]}
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h3" type={isWide ? "heading3" : "heading2"} color="grey1">
            {languageText.stacksTitle}
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <li onClick={() => SetStackNumber(index)} key={"stack" + index} >
                <Stack title={stack.title} icon={stack.img}
                  setModalStack={setModalStack} key={index} />
              </li>
            ))}
            {modalStack && <StackModal setModalStack={setModalStack} stackNumber={stackNumber!} />}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                {languageText.bodyMessage[0]}
              </Text>
              <Text as="p" type="body1" color="grey2">
                {languageText.bodyMessage[1]}
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                {languageText.bodyMessage[2]}
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="heading3" color="grey2" css={{ marginBottom: "$2" }}>
                {languageText.apresentationButtons[0]}
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
