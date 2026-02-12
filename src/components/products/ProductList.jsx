import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";


/* * styles = { background: "backgroun_1h28d01niond2d } */


const ProductList = (props) => {
    const { products } = props;

    return (
        <section id="products">

            <h2 className={styles["font-huge"]}>
                Lista dei tipi di pasta:
            </h2>
            <div className="container cards-wrapper">

                {/* // (condizione ) ? (valoreVero) : (valoreFalso) */}

                {products.length > 0 && products.map(singleProduct => (
                    <ProductCard
                        key={singleProduct.id}
                        id={singleProduct.id}
                        title={singleProduct.title}
                        src={singleProduct.src}
                    />
                ))}

                {/* OBIETTIVO per martedi': CREA NUOVO COMPONENTE A CUI PASSI I DATI DEL SINGOLO PRODOTTO */}
                {/* {products.map((product) => ( */}

                {/* ))} */}
            </div>
        </section>
    )
}

export default ProductList


// % prendiIProdotti.ChiamaIlMetodoCheCreaUnNuovoArrayCheAsssociAQualcosAltroOgniElementoEsistente
// * per ognuno di loro, non mi restituire semplicemente il suo contenuto
// & ma associalo ad un nuovo elemento della UI con dentro le caratteristiche che ti sto indicando