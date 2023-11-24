const ItemServico = (props) => {
    return (
      <div className="servico">
        <h1>{props.titulo}</h1>
        <img src={props.img} alt='imagem' style={{maxWidth:250}}></img>
        <h2>{props.descricao}</h2>
        <p>Preço: {props.preco}</p>
      </div>
    );
  };
  export default ItemServico;