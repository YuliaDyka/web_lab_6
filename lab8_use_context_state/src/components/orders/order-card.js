import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";

const OrderCard = ({ id, img, full_name, destination, car_brand, price }) => {
  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate("/item/:"{id});
  // }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {full_name}
          </Typography>
          <Typography variant="body1" sx={{ minHeight: 100 }}>
            {destination}
          </Typography>
          <Typography>
            <b>Brand: {car_brand} </b>
          </Typography>
          <Typography>
            <b>Price: {price} UAH</b>
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Redirect to={"/search/" + this.state.name} /> */}
          <NavLink to={"/item/" + id}> View More </NavLink>
          {/* <Button
            style={{
              backgroundColor: "#21b6ae",
            }}
            color="primary"
            size="small"
            variant="contained"
            // onClick={handleClick}
          >
            View More
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default OrderCard;
