import * as React from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { withStyles, StyleRules, StyleComponentProps, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme): StyleRules => ({
    body: {
        padding: "8px 16px 8px 24px"
    },
    button: {
        padding: "0px 32px 16px 32px"
    },
    paperItem: {
        width: "100%",
        maxWidth: "650px"
    },
    pestPaper: {
        paddingTop: "16px"
    }
});

export interface MaintenanceState {
    address?: string;
    name?: string;
    options?: string;
}

@withStyles(styles)
export default class Maintenance extends React.Component<StyleComponentProps, MaintenanceState> {
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
                            <Typography variant="title" className={classes.body}>
                                Report a Problem
                            </Typography>
                            <Typography variant="body2" className={classes.body}>
                                Tenants can report maintenance and repair issues directly to our maintenance staff.
                                To report a problem, either send a detailed e-mail to maintenance at 765maintenance@gmail.com, or you may call or text 765-400-3491.
                            </Typography>
                            <Typography variant="body2" className={classes.body}>
                                We give priority to issues affecting safety and habitability.  Other requests are processed along with routine maintenance.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.pestPaper} xs={10} md={8} alignItems="center">
                        <Paper >
                            <Typography variant="title" className={classes.body}>
                                Pest Policy
                            </Typography>
                            <Typography variant="body2" className={classes.body}>
                                Problems with pests, such as, but not limited to rodents, spiders, various insects, and bedbugs can arise.
                                Each unit is cleaned and treated for pests prior to occupancy. Tenants are to inspect the unit for any signs of pests before accepting the unit.
                            </Typography>
                            <Typography variant="body2" className={classes.body}>
                                If a pest issue arises, we need to work together to resolve it as effectively as practical. Upon being notified for a pest issue, the landlord will supply the tenant with chemicals and sprays that are labeled as being effective for controlling the particular pest, limited to an allowance of $100.00 per year. The landlord may suggest certain brands of insecticides. The tenant may select any brand or product labeled as an effective control for the specific pest. Product selection and application, according to the label, is the responsibility of the tenant. If the pest problem can not be resolved in a manner acceptable to the tenant, the tenant can find suitable housing elsewhere. If an infestation can not be resolved in a manner acceptable to the landlord, the landlord may issue reasonable notice to vacate.
                            </Typography>
                            <Grid container alignContent="space-between" justify="center">
                                <Grid item className={classes.button}>
                                    <Button
                                        color="secondary"
                                        href="https://www.domyown.com/msds/ExciteR%20Insectcide%20Label.pdf"
                                        variant="contained"
                                    >
                                        Prentox ExciteR Pesticide
                                    </Button>
                                </Grid>
                                <Grid item className={classes.button}>
                                    <Button
                                        color="secondary"
                                        href="https://www.backedbybayer.com/~/media/BackedByBayer/Product%20Labels%20-%20pdf/Suspend%20SC.ashx"
                                        variant="contained"
                                    >
                                        Bayer Suspend SC Insecticide
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
