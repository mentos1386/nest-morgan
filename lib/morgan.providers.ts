import { MORGAN_PROVIDER } from "./morgan.constants";
import * as morgan from "morgan";

export const morganProviders = [
  {
    provide: MORGAN_PROVIDER,
    useFactory: (): morgan.Morgan => {
      return morgan
    },
  },
];
