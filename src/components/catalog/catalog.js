import { Orders } from '../orders/orders'
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import OrderCard from "../orders/order-card";
import Typography from "@mui/material/Typography";
import { centerContainer } from "./catalog.style";
import { FilterBlock } from '../filterblock/filter-block';

function Catalog() {
    return (
        <>
        <Box sx={{ ...centerContainer, pt: 1 }}>
            <Typography variant="h5" mb="5px">
                Filters
            </Typography>
            <Grid container sx={{ mb: 5 }}>
                <FilterBlock/>
            </Grid>
            <Typography variant="h5" mb="10px">
                Catalog
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            {Orders.map((record, id) => (
                <Grid item key={record.full_name + id}>
                    <OrderCard
                        img={record.img}
                        
                        full_name={record.full_name}
                        destination={record.destination}
                        car_brand={record.car_brand}
                        price={record.price}
                    />
                </Grid>
            ))}
            </Grid>
        </Box>
        </>
    );

   }

   export default Catalog;