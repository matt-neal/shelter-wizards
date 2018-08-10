import * as React from "react";
import { Typography, Avatar, Grid, Button, Paper } from "@material-ui/core";
import { withStyles, StyleRules, StyleComponentProps, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme): StyleRules => ({
    dateTime: {
        marginTop: "5%",
        marginBottom: ".3%",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1.4%"
        }
    },
    Properties: {
        fontSize: "88px"
    },
    time: {
        color: "#434343"
    },
    page: {
        background: "#F5F5F5",
        [theme.breakpoints.down("sm")]: {
            overflow: "hidden"
        }
    },
    paperItem: {
        width: "100%",
        maxWidth: "650px"
    },
    avatar: {
        width: 50,
        height: 50
    }
});

export interface PropertiesState {
    date?: Date;
    name?: string;
    initials?: string;
    timeID?: NodeJS.Timer;
}

// TODO: When we have a way to retrieve user avatars, tie state to them and retrieve them, dynamically updating
// the avatar for the logged in user.

@withStyles(styles)
export default class Properties extends React.Component<StyleComponentProps, PropertiesState> {
    constructor(props: StyleComponentProps) {
        super(props);
        this.state = {
            date: new Date(),
            name: "",
            initials: "",
            timeID: setInterval(() => this.tick(), 1000),
        };
    }

    async componentDidMount() {

    }

    componentWillUnmount() {
        clearInterval(this.state.timeID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.page}>
                <Grid container justify="center" alignItems="center" direction={"column"} className={classes.dateTime}>
                    <Grid item>
                        <Typography variant="display3" className={classes.time}>
                            {this.state.date.toLocaleTimeString(
                                [], { hour: "2-digit", minute: "2-digit", hour12: true }
                            )}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="headline">
                            {this.state.date.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.paperItem}>
                        <Paper style={{ marginTop: "1em" }}>
                            <Grid container alignItems="center" justify="center" spacing={24} direction="row" style={{ marginTop: 0, marginBottom: 0 }}>
                                <Grid item>
                                    <Avatar className={classes.avatar}>{this.state.initials ? this.state.initials : ""}</Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography variant="headline">{this.state.name ? this.state.name : ""}</Typography>
                                    <Button type="text" color="primary">Timesheet</Button>
                                </Grid>
                                <Grid item>
                                    <Button type="text">Log Out</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }
}
