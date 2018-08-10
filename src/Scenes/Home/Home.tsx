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
    Home: {
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

export interface HomeState {
    date?: Date;
    name?: string;
    initials?: string;
    timeID?: NodeJS.Timer;
}

@withStyles(styles)
export default class Home extends React.Component<StyleComponentProps, HomeState> {
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
                        <Paper>
                            <Typography variant="body2">
                                Vacancies
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        );
    }
}
