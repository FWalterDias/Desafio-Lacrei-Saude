import { ContainerProfissional, ContainterImgProfissional, ContainerTextsProfissional, TitlePessoaProfissional, TextPessoaProfissional } from "./styles.js";
import imgProfisisonal  from "../../assets/profissional.svg";

export default function Profissional() {
    return (
        <ContainerProfissional>
            <ContainterImgProfissional>
                <img src={imgProfisisonal} alt="Imagem page Profissional" />
            </ContainterImgProfissional>

            <ContainerTextsProfissional>
                <TitlePessoaProfissional>
                    Profissional
                </TitlePessoaProfissional>

                <TextPessoaProfissional>
                    A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
                </TextPessoaProfissional>
            </ContainerTextsProfissional>
        </ContainerProfissional>
    )
}