import PropTypes from "prop-types";
import ItemServico from "./ItemServico";
import style from "./ItemServico"

function Servicos() {
    return (
        <div className="fundo">
            <ItemServico titulo="Passeio com Patos" descricao="Andando com pato" img="https://s2-g1.glbimg.com/mz1wNhi-Trg9vPKMGW3p85kEYb4=/0x0:928x590/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/x/a/cCXiliRlmB9a8Kwlq4Zg/pata-de-coleira.png" preco="50 reais a hora" />

            <ItemServico titulo="Banho nos patinhos" img="https://i.pinimg.com/originals/4c/8e/1a/4c8e1aa13bcc881f63219f3a1c2f46d3.jpg" preco="O valor depende do pato"></ItemServico>

            <ItemServico titulo="Corte de cabelo para patos" img="https://fotos.amomeupet.org/uploads/fotos/1625764425_60e73249820b1_hd.jpeg" preco="40 reais"></ItemServico>



        </div>
    )
}

export default Servicos;