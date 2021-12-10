import React from "react"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Cards=({Title, Cases,Updates,color,Type})=>{



    return(
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: "3rem" }} color={{color}} gutterBottom>
          {Title}
        </Typography>
        <Typography sx={{ mb:".5em" }} color={{color}}>
          + {Cases}
        </Typography>
        <Typography variant="body2" style={{color:color,fontWeight:900}}>
        {Updates} {Type}

          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      
    </Card>
    )
}











export default Cards