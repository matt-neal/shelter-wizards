declare module "react-selectable" {
    import * as React from "react";
    interface SelectableGroupProps {
        /** Callback fired after user completes selection */
        onSelection(keys: string[]): void;
        /** Callback fired when a click happens within the selectable group component, but not in a selectable item. Useful for clearing selection. */
        onNonItemClick?(element: React.ReactNode): void;
        /** The amount of buffer to add around your <SelectableGroup /> container, in pixels. */
        tolerance?: number;
        /** The component to render. Defaults to div. */
        component?: string;
        /** Whether the <SelectableGroup /> container is a fixed/absolute position element or the grandchild of one. */
        fixedPosition?: boolean;
        /** Enable to fire the onSelection callback while the mouse is moving. Throttled to 50ms for performance in IE/Edge. */
        selectOnMouseMove?: boolean;
        /** Allows to enable/disable preventing the default action of the onmousedown event (with e.preventDefault). True by default. Disable if your app needs to capture this event for other functionalities. */
        preventDefault?: boolean;
        /** If false, all of the selectable features are disabled, and event handlers removed. */
        enabled?: boolean;
        /** A CSS class to add to the containing element */
        className?: string;
    }

    export class SelectableGroup extends React.Component<SelectableGroupProps> { }
    export const createSelectable: ClassDecorator;
}
