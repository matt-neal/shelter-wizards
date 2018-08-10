import * as React from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { withStyles, StyleRules, StyleComponentProps, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme): StyleRules => ({
    body: {
        padding: "8px 16px 8px 24px"
    },
    paperItem: {
        width: "100%",
        maxWidth: "650px"
    }
});

export interface PayRentState {
    address?: string;
    name?: string;
    options?: string;
}

@withStyles(styles)
export default class PayRent extends React.Component<StyleComponentProps, PayRentState> {
    constructor(props: StyleComponentProps) {
        super(props);
        this.state = {
            name: ""
        };
    }

    async componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.page}>
                <Grid container justify="center" className={classes.dateTime}>
                    <Grid item xs={10} md={8} alignItems="center">
                        <Paper>
                            <Typography variant="body2" className={classes.body}>
                                Conveniently pay your rent online with credit card, debit card or ACH securely with PayPal. No PayPal account is required.
                            </Typography>
                            <Typography variant="body2" className={classes.body}>
                                If your rent is current and you pay online we accept rent weekly and biweekly. You can also pay monthly rent and deposits online. Simply select the proper option on the drop-down menu, enter your name and address in the space provide. Click the "Pay Now" button and follow the instructions to process payment through PayPal.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }
}
