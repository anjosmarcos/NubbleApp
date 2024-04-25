import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme/theme";
import React from "react";


export function useAppTheme() {
    const theme = useTheme<Theme>();
    return theme;
}
