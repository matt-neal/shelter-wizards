import * as React from "react";
import { Grid, Button, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles, StyleRules, StyleComponentProps } from "@material-ui/core/styles";

const styles: StyleRules = {
    body: {
        padding: "8px 16px 0px 24px"
    },
    button: {
        padding: "0px 32px 16px 32px"
    }
};

@withStyles(styles)
export default class Leasing extends React.Component<StyleComponentProps> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.page}>
                <Grid container justify="center">
                    <Grid item xs={10} md={8} alignItems="center">
                        <Paper>
                            <Typography variant="title" className={classes.body}>
                                Lease Terms
                            </Typography>
                            <Typography variant="body2" className={classes.body}>
                                In an effort to make life as easy as possible, we offer flexible lease terms to our tenants.
                            </Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemText inset>
                                        Rental agreements are month-to-month, with a 30 day notice of vacating.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText inset>
                                        $500 Deposit
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText inset>
                                        Rent payments are accepted online.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText inset>
                                        Rent can be paid monthly, bi-weekly (50% of monthly rent), or weekly (25% of monthly rent).
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText inset>
                                        Bi-weekly and weekly payment options require online payment.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Grid container alignContent="space-between" justify="center">
                                <Grid item className={classes.button}>
                                    <Button
                                        color="secondary"
                                        href="https://drive.google.com/file/d/1Z4S5ZZ6ZLH7lGEs7P0kUr8lobo1ii_Gl/view"
                                        variant="contained"
                                    >
                                        Sample Lease Agreement
                                    </Button>
                                </Grid>
                                <Grid item className={classes.button}>
                                    <Button
                                        color="secondary"
                                        href="https://www.hud.gov/sites/documents/DOC_11884.PDF"
                                        variant="contained"
                                    >
                                        HUD Lead Pamphlet
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }
}
