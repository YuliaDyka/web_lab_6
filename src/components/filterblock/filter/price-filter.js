import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function PriceFilter(){
    const onChange = (event) => { 
        setPrice(event.target.value);
    }

    const [price, setPrice] = React.useState()

    return(
        <Box sx={{ width: 150 }}>
            <FormControl fullWidth> 
                <InputLabel id="price-select-id">Filter by price..</InputLabel>
                <Select
                    labelId="price-select-id"
                    id="price-select-id"
                    value={price}
                    onChange={onChange}
                    >
                    <MenuItem value={[0, 50]}>0-50</MenuItem>
                    <MenuItem value={[51, 100]}>51-100</MenuItem>
                    <MenuItem value={[101, 500]}>101-500</MenuItem>
                    <MenuItem value={[501, 1000]}>501-1000</MenuItem>
                    <MenuItem value={[1001, 50000]}>1001-50000</MenuItem>
                    </Select>
            </FormControl>
        </Box>
    )

}