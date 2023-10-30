import { Container } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { Button } from '@/styles/Buttons';
import { Footer as FooterWrapper } from './style';
import { FaAngleUp } from 'react-icons/fa';
import { useContext } from "react";
import { AppContext } from '../../providers/appProvider';

export const Footer = (): JSX.Element => {

    const { languageText } = useContext(AppContext);

    return (
        <FooterWrapper>
            <Container>
                <Button onClick={() => { window.scrollTo(0, 0) }} aria-label="Voltar para o topo do site" type="circle"><FaAngleUp /></Button>
                <Text type="body1" color="grey5">{languageText.footerMessage[0]}</Text>
                <Text type="body1" color="grey4">{languageText.footerMessage[1]}</Text>
                <Text type="body1" color="grey3">{languageText.footerMessage[2]} 2.0</Text>
            </Container>
        </FooterWrapper>
    )
}