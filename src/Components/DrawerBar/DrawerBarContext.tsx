import * as React from "react";

interface IDrawerBarContext {
    toggleDrawer?(): void;
}

const DrawerBarContext = React.createContext<IDrawerBarContext>({});

export default DrawerBarContext;
