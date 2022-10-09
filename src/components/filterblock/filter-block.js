import { PriceFilter } from "./filter/price-filter";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


export function FilterBlock(){
    return (
        <Grid sx={{display:"flex", justifyContent: "space-between" }}>
          <Grid item>
            <PriceFilter />
          </Grid>
          {/* <Grid item>
            <ReviewsAmountSelector />
          </Grid> */}
          {/* <Grid item>
            <FilmLengthSelector />
          </Grid> */}
          <Grid item sx={{ ml: "50px", my: "auto"}}>
            <Grid container spacing={2}>
              <Grid item>
                <Button color="primary" variant="contained">
                  Apply
                </Button>
              </Grid>
              <Grid item>
                <Button  color="error" variant="contained">
                  Discard
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
}

