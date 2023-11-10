import { ContainerPessoaUsuaria, ContainterImgPessoaUsuaria, ContainerTextsPessoaUsuaria, TitlePessoaUsuaria, TextPessoaUsuaria  } from "./styles.js"
import imgPessoaUsuaria from "../../assets/pessoaUsuaria.svg"

export default function PessoaUsuaria() {
    return (
        <ContainerPessoaUsuaria>
            <ContainterImgPessoaUsuaria>
                <img src={imgPessoaUsuaria} alt="Imagem Pessoa usuaria" />
            </ContainterImgPessoaUsuaria>

            <ContainerTextsPessoaUsuaria>
                <TitlePessoaUsuaria>
                    Pessoa Usuária
                </TitlePessoaUsuaria>

                <TextPessoaUsuaria>
                    A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
                </TextPessoaUsuaria>
            </ContainerTextsPessoaUsuaria>
        </ContainerPessoaUsuaria>
    )
}