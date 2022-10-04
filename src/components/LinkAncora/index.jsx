import PropTypes from "prop-types"
import Image from "next/image"
import OrangeDownArrow from "../../assets/img/orange-down-arrow.png"
import { LinkWrapper } from "./styles"

/**
 * Componente de LinkAncora utilizado na Home Page do site.
 * Como é um link âncora, devemos passar o Id da seção da página
 * que queremos redirencionar o usuário.
 * 
 * Exemplo: Se a seção que se quer redirecionar é {<section id="parte-2"\></section\>}, a
 * props idSecao será "#parte-2"
 * 
 * Por padrão, quando nenhum id é informado, o usuário
 * é redirecionado ao "/" da aplicação.
 * @param {idSecao} props ID da seção que redirecionamos o usuário
 * no formato "#id_secao". 
 */
export const LinkAncora = (props) => {
    return (
        <LinkWrapper href={props.idSecao}>
            Vamo lá
            <Image 
                src={OrangeDownArrow}
                height={36}
                width={36}/>
        </LinkWrapper>
    )

}

LinkAncora.prototypes = {
    idSecao: PropTypes.string.isRequired
}

LinkAncora.defaultProps =  {
    idSecao: "/"
}
