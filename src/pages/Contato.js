import ItemFormulario from "./ItemFormulario";

function Contato(props){
    return(
        //entrada label label="nome" name="nome" tipo="text" ph="Digite seu nome"
<p>
    <h1> Informações de contato¯\_(ツ)_/¯</h1>
   <ItemFormulario name="nome" label="Nome:" id="Nome" ph="Digite seu nome"/>
   <br></br>
   <ItemFormulario name="E-mail" label="E-mail:" id="E-mail" ph="Digite seu E-mail"/>
   <br></br>
   <ItemFormulario name="assunto" label="Assunto:" id="Assunto" ph="Assunto"/>
   <br></br>
   <ItemFormulario name="Mensagem" label="Mensagem:" id="Mensagem" ph="Sua Mensagem"/>

   <p> <button>Envie já!</button> </p>

</p>
    )
}
export default Contato;