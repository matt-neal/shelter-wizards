import * as React from "react";
import * as classNames from "classnames";
import { AppBar, Collapse, Divider, Drawer, Grid, IconButton, List, Paper, Toolbar, Tooltip, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles, StyleRules, StyleComponentProps, Theme } from "@material-ui/core/styles";
import DrawerListItem from "./DrawerListItem";
import DrawerBarContext from "./DrawerBarContext";

const drawerWidth = 200;

const styles = (theme: Theme): StyleRules => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        display: "flex",
        width: "100%",
    },
    appBar: {
        position: "absolute",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    "appBarShift-left": {
        marginLeft: drawerWidth,
    },
    "appBarShift-right": {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: "none",
    },
    lists: {
        paddingLeft: "32px"
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 8px 8px 32px",
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    "content-left": {
        marginLeft: -drawerWidth,
    },
    "content-right": {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    "contentShift-left": {
        marginLeft: 0,
    },
    "contentShift-right": {
        marginRight: 0,
    },
});

export interface DrawerBarState {
    anchor?: "left" | "right" | "top" | "bottom";
    open?: boolean;
    propertiesOpen?: boolean;
}

@withStyles(styles)
export default class DrawerBar extends React.Component<StyleComponentProps, DrawerBarState> {
    constructor(props: StyleComponentProps) {
        super(props);
        this.state = {
            anchor: "left",
            open: false,
            propertiesOpen: false
        };
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    }

    toggleProperties = () => {
        this.setState({ propertiesOpen: !this.state.propertiesOpen });
    }

    Header = (props: { text: string, path: string, secondaryAction?: React.ReactNode }) => ((
        <DrawerListItem
            linkText={props.text}
            path={props.path}
            activeClass={this.props.classes.activeLink}
            listClass={this.props.classes.listItem}
            containerClass="active-list-item"
            textClass={this.props.classes.headerItem}
            SecondaryAction={props.secondaryAction}
            toggle={this.toggleDrawer}
        />
    ))

    Item = (props: { text: string, path: string }) => ((
        <DrawerListItem
            linkText={props.text}
            path={props.path}
            activeClass={this.props.classes.activeLink}
            listClass={this.props.classes.listItem}
            containerClass="active-list-item"
            textClass={this.props.classes.innerItem}
            toggle={this.toggleDrawer}
        />
    ))

    render() {
        const { classes } = this.props;
        const { anchor, open, propertiesOpen } = this.state;

        const drawerContent = (
            <div className={classes.lists}>
                <List className={classes.insetList}>
                    <this.Item
                        text="Home"
                        path="/home"
                    />
                    <this.Item
                        text="Pay Rent"
                        path="/pay-rent"
                    />
                    <this.Item
                        text="Leasing"
                        path="/leasing"
                    />
                    <this.Item
                        text="Maintenance"
                        path="/maintenance"
                    />
                    <this.Item
                        text="Rental Application"
                        path="/rental-application"
                    />
                    <this.Item
                        text="Contact Us"
                        path="/contact-us"
                    />
                </List>
                <List>
                    <this.Header
                        text="Properties"
                        path="/properties"
                        secondaryAction={this.toggleProperties}
                    />
                    <Collapse in={propertiesOpen} unmountOnExit>
                        <List className={this.props.classes.insetList}>
                            <this.Item
                                text="Scheduling"
                                path="/my-learning-center/scheduling"
                            />
                            <this.Item
                                text="Appointments"
                                path="/my-learning-center/appointments"
                            />
                            <this.Item
                                text="Clock"
                                path="/my-learning-center/clock"
                            />
                            <Divider />
                            <this.Item
                                text="Resources"
                                path="/my-learning-center/resources"
                            />
                            <this.Item
                                text="Homework"
                                path="/my-learning-center/homework"
                            />
                            <Divider />
                            <this.Item
                                text="Employees"
                                path="/my-learning-center/employees"
                            />
                            <Divider />
                            <this.Item
                                text="Hiring"
                                path="/my-learning-center/hiring"
                            />
                            <this.Item
                                text="Operations"
                                path="/my-learning-center/operations"
                            />
                            <this.Item
                                text="Visits"
                                path="/my-learning-center/visits"
                            />
                        </List>
                    </Collapse>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                            [classes[`appBarShift-${anchor}`]]: open,
                        })}
                    >
                        <Toolbar disableGutters={!open}>
                            <Tooltip title="Menu">
                                <IconButton
                                    color="inherit"
                                    aria-label="Open Menu"
                                    onClick={this.toggleDrawer}
                                    className={classNames(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Tooltip>
                            <Grid container direction="column">
                                <Typography variant="headline" color="inherit" noWrap>
                                    Shelter Wizards, LLC
                                </Typography>
                                <Typography variant="subheading" color="inherit" noWrap>
                                    Residential Rental Property Solutions
                                </Typography>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <Typography variant="subheading" color="inherit" align="center">
                                Menu
                            </Typography>
                            <Tooltip title="Close">
                                <IconButton onClick={this.toggleDrawer}>
                                    {<ChevronLeftIcon />}
                                </IconButton>
                            </Tooltip>
                        </div>
                        <Divider />
                        {drawerContent}
                    </Drawer>
                    <main
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open,
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        <DrawerBarContext.Provider value={{ toggleDrawer: this.toggleDrawer }}>
                            {this.props.children}
                        </DrawerBarContext.Provider>
                    </main>
                </div>
            </div>
        );
    }
}
