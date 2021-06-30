import * as React from "react";
import { IImageIcon } from "./data";
import { ImageIcon as Layout } from "./Layout";

export const ImageIcon: React.FC<IImageIcon> = (props) => <Layout {...props} />;
