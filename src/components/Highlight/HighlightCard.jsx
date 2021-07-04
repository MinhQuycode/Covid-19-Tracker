import React from 'react'
import { Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core'
import CountUp from "react-countup";

const useStyles = makeStyles({
    wrapper:(props)=>{
        if(props.type === 'confirmed') return {borderLeft :"5px solid red"};
        if(props.type === 'recovered') return {borderLeft :"5px solid green"};
        else return {borderLeft :"5px solid black"};
    },
    title:{
        fontSize:"20px",
        color: "black",
        textAlign:"center"
    },
    count:{
        color:"black",
        fontSize:"20px",
        fontWeight:"bold",
        textAlign:"center"
    }
})

export default function HighlightCard({title,count,type}) {
    const style = useStyles({type})
    return (
        <Grid item sm={4} sx={12}>
                <Card className={style.wrapper}>
                    <CardContent>
                        <Typography component="p" variant="body2" className={style.title}>
                            {title}
                        </Typography>
                        <Typography component="p" variant="body2" className={style.count}>
                            <CountUp end={count || 0} duration={2} separator=" " />
                        </Typography>
                    </CardContent>
                </Card>
        </Grid>
    )
}
