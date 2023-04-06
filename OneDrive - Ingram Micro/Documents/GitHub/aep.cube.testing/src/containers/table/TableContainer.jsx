import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import TableResults from "../../components/TableResults";
import fetchTableData from "../../hooks/GetTable";


function TableContainer() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchTableData();
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Sorry, we couldn't load the data. Please try again later</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "1200px",
        padding: "16px",
        maxHeight: "550px",
        marginTop: "50px",
      }}
    >
        <TableResults data={data} />
    </Box>
  );
}

export default TableContainer;
