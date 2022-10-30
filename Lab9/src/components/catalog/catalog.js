import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import OrderCard from "../orders/order-card";
import Typography from "@mui/material/Typography";
import { centerContainer } from "./catalog.style";
import { FilterBlock } from "../filterblock/filter-block";
import { useContext, useState } from "react";
import { OrdersContext } from "../context-provider/orders-context-provider";
import { FiltersContext } from "../context-provider/filters-context-provider";
import { priceFilters } from "../filterblock/filter/filters-common";
const img = require("../../images/car.jpg");

function Catalog() {
  const [ordersData] = useContext(OrdersContext);
  const [filters] = useContext(FiltersContext); 
   const [ordersDataDB, setOrders] = useState(ordersData);
  const [fileredOrders, setFileredOrders] = useState(ordersData);


  const applyFilters = () => {
    let priceFilter = priceFilters[filters.priceFilterId];
    console.log(
      "applyFilters: price: " +
        filters.priceFilterId +
        ", name: " +
        filters.nameFilter
    );
    let filteredItems = ordersData.filter(
      (order) =>
        (priceFilter.min < 0 ||
          (order.price >= priceFilter.min && order.price <= priceFilter.max)) &&
        (!filters.nameFilter || order.full_name.includes(filters.nameFilter))
    );
    
       filteredItems.forEach((element) => {
        console.log(
          "filtes order name " +
        element.car_brand + "   --" + element.destination + "--")
       })
    setOrders(filteredItems);
  };

  const discardFilters = () => {
    console.log("discardFilters" + ordersData);
    setOrders(ordersData);
  };

  return (
    <>
      <Box sx={{ ...centerContainer, pt: 1 }}>
        <Typography variant="h5" mb="5px">
          Filters
        </Typography>
        <Grid container sx={{ mb: 5 }}>
          <FilterBlock
            applyFilters={applyFilters}
            discardFilters={discardFilters}
          />
        </Grid>
        <Typography variant="h5" mb="10px">
          Catalog
        </Typography>
        <Grid container spacing={2} sx={{}}>
        {ordersData.map((record, index) => (
            <Grid item key={index} sx={{ ml: 15 }}>
              <OrderCard
                id={record.id}
                img={img}
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
