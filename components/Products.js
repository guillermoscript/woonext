// import '../styles/product.css';

function Product(props) {

    const { product } = props
    // console.log(product)
    // const categoriesName = product.categories.map(category => category.name)

    return (
        <div className="card mb-3 mr-4">
            <h3 className="card-header text-center product-name">{product.name}</h3>
            <img src={product.image === null ? '' : product.image.sourceUrl }  />
            <div className="card-body">
                <h6 className="card-subtitle text-center text-muted">{product.price} $</h6>
                {/* <p className="card-title">Categorias: {product.shortDescription}</p> */}
                <a href="" className="btn btn-secondary text-center" >Ver </a>
            </div>
        </div>
    )
}
export default Product