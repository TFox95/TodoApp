import * as React from "react";

export interface TaskCardInterface {
    key: string;
    title: string;
    description: string;
    route: string;
}

export interface sidebarInterface {
    position: string;
    handleSort?: object | React.ReactNode;
}