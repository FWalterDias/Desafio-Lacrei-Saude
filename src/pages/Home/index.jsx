import { ContainerHome, ContainterImgHome, ContainerTextsHome, TitleHome, TextHome, ButonsArea, ButtonPessoaUsuaria, ButtonProfissional } from "./styles.js";
import imgHome from "../../assets/home.svg";

export default function Home() {
    return (
        <ContainerHome>
            <ContainterImgHome>
                <img src={imgHome} alt="Imagem Home" />
            </ContainterImgHome>

            <ContainerTextsHome>
                <TitleHome>
                    Boas vindas a Lacrei
                    Saúde
                </TitleHome>

                <TextHome>
                    Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
                </TextHome>

                <ButonsArea>
                    <ButtonPessoaUsuaria to="/pessoaUsuaria">
                        Pessoa Usuária
                    </ButtonPessoaUsuaria>

                    <ButtonProfissional to="/profissional">
                        Profissional
                    </ButtonProfissional>
                </ButonsArea>
            </ContainerTextsHome>
        </ContainerHome>
    )
}