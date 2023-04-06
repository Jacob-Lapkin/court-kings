import React from "react";
import Typography from "@mui/material/Typography";
import "../styles/search.css";

function ProductDetails(props) {
  const { imageUrl, title, vpn, sku, price, inStock } = props;

  // Render the product details with an image and text
  return (
    <div
      className="product-details"
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "16px",
        backgroundColor: "#fff",
        padding: "0px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        height: "225px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="product-image"
        style={{ width: "50%", height: "100%", objectFit: "cover" }}
      />
      <div
        className="product-info details-container"
        style={{
          flex: 1,
          paddingLeft: "16px",
          textAlign: "left",
          padding: "16px",
        }}
      >
        <Typography variant="h6" gutterBottom className="product-title">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className="product-vpn detail-item"
        >
          VPN: {vpn}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className="product-sku detail-item"
        >
          SKU: {sku}
        </Typography>
        <Typography variant="h6" gutterBottom className="product-price">
          ${price}
        </Typography>
        <div className="stock-text">In stock {inStock}</div>
      </div>
    </div>
  );
}

export default ProductDetails;
