import * as React from "react";
import { ILinear } from "./data";
import { Linear as Layout } from "./Layout";

export const Linear: React.FC<ILinear> = (props) => <Layout {...props} />;
