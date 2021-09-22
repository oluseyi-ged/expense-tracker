import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core"

import useStyles from "./styles.js"

const Main = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subtitle="Speechly Integrated" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ line: "1.5em", marginTop: "20px" }}
        >
          {/* Inforcard... */}
          Try saying: add income for $1100 in category salary for monday...
        </Typography>
        <Divider />
        {/* form */}
      </CardContent>
      <CardContent className="classes.cardContent">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
