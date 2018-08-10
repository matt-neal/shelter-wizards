import * as React from "react";
import { ListItem, Typography, ListItemSecondaryAction, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

interface DrawerListItemProps {
    activeClass: string;
    containerClass: string;
    linkText: string;
    listClass: string;
    path: string;
    textClass: string;
    SecondaryAction?: React.ReactNode;
    toggle(): void;
}


export default class DrawerListItem extends React.Component<DrawerListItemProps> {
    render() {
        const { SecondaryAction } = this.props;
        return (
            <ListItem className={this.props.listClass} style={{ padding: 0, height: 48 }}>
                <NavLink
                    exact
                    strict
                    to={this.props.path}
                    activeClassName={this.props.activeClass}
                    onClick={this.props.toggle}
                    style={{ textDecoration: "none", height: "100%" }}
                >
                    <Grid alignItems="center" className={this.props.containerClass} style={{ height: "100%" }} container>
                        <Grid item>
                            <Typography variant="subheading" className={this.props.textClass}>
                                {this.props.linkText}
                            </Typography>
                        </Grid>
                    </Grid>
                </NavLink>
                {(SecondaryAction) ?
                    <ListItemSecondaryAction>
                        {SecondaryAction}
                    </ListItemSecondaryAction>
                    : null
                }
            </ListItem>
        );
    }
}
