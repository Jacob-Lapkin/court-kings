import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import PrimaryContainer from "./searchproduct/PrimaryContainer";
import TableContainer from "./table/TableContainer";
import { grey } from '@mui/material/colors';


function AppContainer() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* Header row */}
        <Grid item xs={12}>
          <Box sx={{ pt: 2, pl: 2 }}>
          <Typography variant="h5" textAlign="left" color={grey[500]}>
              Catalog Cube Test Console
            </Typography>
          </Box>
        </Grid>
        {/* Primary container row */}
        <Grid item xs={12}>
          <PrimaryContainer />
        </Grid>
        {/* Table container row */}
        <Grid item xs={12}>
          <TableContainer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppContainer;
