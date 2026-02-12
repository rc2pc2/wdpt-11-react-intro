const Logo = (props) => {
    return (
        <>
            <figure>
                <img src={props.image} alt={props.slogan} />
            </figure>

            {/* && short-circuit => restituisce il secondo operando SOLO SE il primo e' truthy */}
            {/* <p>{props.slogan && "Lo slogan c'e'"}</p> */}

            {/* || short-circuit => restituisce il primo operando SOLO SE il primo e' truthy, altrimenti restituisci il secondo */}
            {/* <p>{props.slogan || "Slogan di prova"}</p> */}

            {/* (condizione) ? (valoreVero) : (valoreFalso) */}
        </>
    )
}

export default Logo;