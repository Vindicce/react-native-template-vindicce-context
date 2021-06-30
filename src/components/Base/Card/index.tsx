import * as React from "react";
import { ICard } from "./data";
import { Card as Layout } from "./Layout";

export const Card: React.FC<ICard> = (props) => <Layout {...props} />;
