// tslint:disable-next-line:no-import-side-effect
import "styled-components";
import { Theme } from "./types";

declare module "styled-components" {
    // tslint:disable-next-line:no-empty-interface
    export interface DefaultTheme extends Theme {}
}
