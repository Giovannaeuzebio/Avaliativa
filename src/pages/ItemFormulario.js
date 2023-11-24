function ItemFormulario(props){
    return(
        //entrada label label="nome" name="nome" tipo="text" ph="Digite seu nome"
<p>
    <label for={props.name}>{props.label}</label>
    <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph}></input>
</p>
    )
}
export default ItemFormulario;