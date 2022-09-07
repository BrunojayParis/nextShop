import styled from "styled-components";
import { ProductStyles } from "../../styles/ProductStyle";
export default function Product({product}){

    const {Title, Price, Image} = product.attributes;
    console.log(product)

    return(
        <ProductStyles>
            <div>
                <img src={Image.data.attributes.formats.small.url} alt="" />
            </div>
            <h2>{Title}</h2>
            <PriceStyled>{Price}</PriceStyled>
        </ProductStyles>
    )
}
