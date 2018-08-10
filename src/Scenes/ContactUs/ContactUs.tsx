import * as React from "react";
import { Grid, Button, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles, StyleRules, StyleComponentProps } from "@material-ui/core/styles";

const styles: StyleRules = {
    body: {
        padding: "8px 16px 0px 24px"
    },
    button: {
        padding: "0px 32px 16px 32px"
    },
    contacts: {
        paddingLeft: "24px"
    }
};

@withStyles(styles)
export default class ContactUs extends React.Component<StyleComponentProps> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.page}>
                <Grid container justify="center">
                    <Grid item xs={10} md={8} alignItems="center">
                        <Paper>
                            <Typography variant="title" className={classes.body}>
                                Contact Us
                            </Typography>
                            <List dense>
                                <Grid container className={classes.contacts}>
                                    <Grid item>
                                        <ListItem>
                                            <Grid container direction="column">
                                                <ListItemText primary="Address:"/>
                                                <ListItemText secondary="Shelter Wizards LLC"/>
                                                <ListItemText secondary="P.O. Box 1345"/>
                                                <ListItemText secondary="Anderson, IN 46015"/>
                                            </Grid>
                                        </ListItem>
                                    </Grid>
                                    <Grid item>
                                        <ListItem>
                                            <Grid container direction="column">
                                                <ListItemText primary="Rental Property Information:" />
                                                <ListItemText secondary="765rental@gmail.com" />
                                                <ListItemText secondary="765-351-1414" />
                                            </Grid>
                                        </ListItem>
                                    </Grid>
                                    <Grid item>
                                        <ListItem>
                                            <Grid container direction="column">
                                                <ListItemText primary="Maintenance and Repair:" />
                                                <ListItemText secondary="765maintenance@gmail.com" />
                                                <ListItemText secondary="765-400-3491" />
                                            </Grid>
                                        </ListItem>
                                    </Grid>
                                    <Grid item>
                                        <ListItem>
                                            <Grid container direction="column">
                                                <ListItemText primary="Web Admin:" />
                                                <ListItemText secondary="Jeff Ehrlich" />
                                                <ListItemText secondary="765rental@suite1001.com" />
                                            </Grid><ListItemText inset />
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }
}
