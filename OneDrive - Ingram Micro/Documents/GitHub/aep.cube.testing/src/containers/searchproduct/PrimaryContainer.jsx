import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ProductDetails from "../../components/ProductDetails";
import ChartContainer from "../barchart/ChartContainer";
import ProductSearch from "../../components/ProductSearch";
import fetchProductDetails from "../../hooks/GetProductDetails";

function PrimaryContainer() {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const data = await fetchProductDetails();
        setProductData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getProductData();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "550px",
          height: "250px",
          padding: "16px",
          marginRight: "16px",
          marginBottom: "16px",
          flexShrink: 0, // Prevent shrinking
        }}
      >
        <ProductSearch />
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {productData && (
          <ProductDetails
            imageUrl={productData.imageUrl}
            title={productData.title}
            vpn={productData.vpn}
            sku={productData.sku}
            price={productData.price}
            inStock={productData.inStock}
          />
        )}
      </Box>
      <Box
        sx={{
          width: "550px",
          height: "250px",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <ChartContainer />
      </Box>
    </Box>
  );
}

export default PrimaryContainer;
