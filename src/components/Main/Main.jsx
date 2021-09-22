import React, { useContext } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core"
import Form from "./Form/Form"
import List from "./List/List"
import { ExpenseTrackerContext } from "../../context/context"

import useStyles from "./styles.js"
import InfoCard from "../infoCard"

const Main = () => {
  const classes = useStyles()
  const { balance } = useContext(ExpenseTrackerContext)

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subtitle="Speechly Integrated" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ line: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
          {/* Try saying: add income for $1100 in category salary for monday... */}
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className="classes.cardContent">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
