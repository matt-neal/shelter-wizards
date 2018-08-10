import * as React from "react";
const iframe = React.createElement.bind(React, "iframe");
import { withStyles, StyleRules, StyleComponentProps } from "@material-ui/core/styles";

const styles: StyleRules = {
    divStyle: {
        position: "inherit",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%"
    }
};

const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
};

export interface ResponsiveEmbedProps extends StyleComponentProps {
    src: string;
}

export interface ResponsiveEmbedState {
    iframeProps: Object;
}

/*
 *  Usage: <ResponsiveEmbed src="ace youtube video" />
 */
@withStyles(styles)
export default class ResponsiveEmbed extends React.Component<ResponsiveEmbedProps, ResponsiveEmbedState> {
    constructor(props: ResponsiveEmbedProps) {
        super(props);
        this.state = {
            iframeProps: Object.assign({ frameBorder: 0 }, props, { style: iframeStyle })
        };
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.divStyle}>
                {iframe(this.state.iframeProps)}
            </div>
        );
    }
}
