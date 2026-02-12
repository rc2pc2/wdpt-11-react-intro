

// ^ export default function ProductCard(){} 
const ProductCard = (props) => {
    // * const id = props.id;
    // * const src = props.src;
    // * const title = props.title;
    const { id, src, title } = props;


    return (
        <article className="product-card">
            <img src={src} alt={title} />
            <h3>
                {(id) && <span>{id} - </span>}{title}
            </h3>
        </article>
    )
}

export default ProductCard;