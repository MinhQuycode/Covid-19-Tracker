import React from 'react'
import {FormControl, FormHelperText, InputLabel, NativeSelect, Typography} from "@material-ui/core"


export default function CountrySelector({value,handleOnChange,countries}) {
    return <FormControl>
        <Typography component='h6' color="primary">Quốc gia</Typography>
        <NativeSelect
            value={value}
            onChange={handleOnChange}
            inputProps={{
                name:"country",
                id:"country-selector"
            }}>
            {
                countries.map((country,index)=>{
                    return(
                        <option key={index} value={country.ISO2?.toLowerCase()}>
                            {country.Country}
                        </option>
                    )
                })
            }
        </NativeSelect>
        <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        <br/><br/>
    </FormControl>
}
