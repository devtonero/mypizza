import {
  ProductContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./pizzas.styles";

const Product = ({ heading, ProductData }) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {ProductData.map((prod, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={prod.img} alt={prod.alt} />
              <ProductInfo>
                <ProductTitle>{prod.name}</ProductTitle>
                <ProductDesc>{prod.desc}</ProductDesc>
                <ProductPrice>{prod.prices}</ProductPrice>
                <ProductButton>{prod.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Product;
