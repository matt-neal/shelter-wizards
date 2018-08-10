import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { DrawerBar } from "Components";
import * as Scenes from "Scenes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShelterTheme from "ThemeOverride";

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={ShelterTheme}>
                <CssBaseline />
                <Switch>
                    <DrawerBar>
                        <Route path="/home" component={Scenes.Home} />
                        <Route path="/pay-rent" component={Scenes.PayRent} />
                        <Route path="/leasing" component={Scenes.Leasing} />
                        <Route path="/rental-application" component={Scenes.RentalApplication} />
                        <Route path="/maintenance" component={Scenes.Maintenance} />
                        <Route path="/properties" component={Scenes.Properties} />
                        <Route path="/contact-us" component={Scenes.ContactUs} />
                    </DrawerBar>
                </Switch>
            </MuiThemeProvider>
        );
    }
}
