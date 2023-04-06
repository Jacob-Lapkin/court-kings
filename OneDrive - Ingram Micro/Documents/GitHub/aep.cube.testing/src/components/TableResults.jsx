import React, { useState } from "react";
import "../styles/table.css";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";

function TableResults(props) {
  // Destructure data from props
  const { data } = props;

  // Create state for comments and feedback
  const [comments, setComments] = useState({});
  const [feedback, setFeedback] = useState("neutral");

  // Handle thumb up and thumb down button clicks
  const handleThumbUpClick = (sku) => {
    if (comments[sku]) {
      console.log("test");
      setFeedback("thumbs-up");
    } else {
      console.log("test no comment");
    }
  };

  const handleThumbDownClick = (sku) => {
    if (comments[sku]) {
      console.log("test");
      setFeedback("thumbs-down");
    } else {
      console.log("test no comment");
    }
  };

  // Handle comment changes and update comments state
  const handleCommentChange = (sku) => (event) => {
    const value = event.target.value;
    setComments((prevState) => ({
      ...prevState,
      [sku]: value,
    }));
    console.log(comments);
  };

  // Set initial sort order
  const [orderBy, setOrderBy] = useState("product");
  const [order, setOrder] = useState("asc");

  // Handle sorting
  const handleSortRequest = (property) => {
    const newOrderBy = property;
    let newOrder = "desc";
    if (orderBy === property && order === "desc") {
      newOrder = "asc";
    }
    setOrderBy(newOrderBy);
    setOrder(newOrder);
  };

  // Sort data based on sort order
  const sortedData =
    data &&
    data.sort((a, b) => {
      const isAsc = order === "asc";
      if (orderBy === "availability") {
        const availabilityA = Number(a[orderBy]);
        const availabilityB = Number(b[orderBy]);
        return (
          (availabilityA === availabilityB
            ? 0
            : availabilityA < availabilityB
            ? -1
            : 1) * (isAsc ? 1 : -1)
        );
      }
      if (orderBy === "price") {
        const priceA = Number(a[orderBy]);
        const priceB = Number(b[orderBy]);
        return (
          (priceA === priceB ? 0 : priceA < priceB ? -1 : 1) * (isAsc ? 1 : -1)
        );
      }
      return (a[orderBy] < b[orderBy] ? -1 : 1) * (isAsc ? 1 : -1);
    });

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "16px",
        backgroundColor: "#fff",
        padding: "16px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        maxWidth: "1400px",
        maxHeight: "550px",
        overflowY: "auto",
      }}
      className="scroll-container"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <TableSortLabel
                active={orderBy === "product"}
                direction={orderBy === "product" ? order : "asc"}
                onClick={() => handleSortRequest("product")}
              >
                Product
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "availability"}
                direction={orderBy === "availability" ? order : "asc"}
                onClick={() => handleSortRequest("availability")}
              >
                Availability
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "price"}
                direction={orderBy === "price" ? order : "asc"}
                onClick={() => handleSortRequest("price")}
              >
                Price
              </TableSortLabel>
            </TableCell>
            <TableCell>Comment</TableCell>
            <TableCell>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData &&
            sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{item.product}</TableCell>
                <TableCell>
                  <div className="availability-cell">
                    In stock {item.availability}
                  </div>
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <TextField
                    variant="standard"
                    label="Comment"
                    sx={{ width: 150 }}
                    value={comments[item.sku] || ""}
                    onChange={handleCommentChange(item.sku)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="thumbs up"
                    onClick={() => handleThumbUpClick(item.sku)}
                  >
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton
                    aria-label="thumbs down"
                    onClick={() => handleThumbDownClick(item.sku)}
                  >
                    <ThumbDownIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default TableResults;
