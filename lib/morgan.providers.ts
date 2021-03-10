import { MORGAN_PROVIDER } from "./morgan.constants";
import { Morgan } from "morgan";
import morgan = require("morgan");

export const morganProviders = [
  {
    provide: MORGAN_PROVIDER,
    useFactory: (): Morgan<any, any> => {
      return morgan;
    },
  },
];
