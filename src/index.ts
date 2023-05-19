import meow from "meow";
import { run } from "./main";

const cli = meow(
  `
	Usage
	  $ fcon --to <dataType> <value>
      $ fcon --from <dataType> <value>

	Options
	  --to, -t  The dataType you want to convert the value to. The input data is considered binary at this point
      --from, -f The datatype you want to convert from. You will get contiunous prompts for doing chain conversions

	Data types supported:
        - binary
        - hex
        - base64
        - bytearray
`,
  {
    importMeta: import.meta,
    flags: {
      to: {
        type: "string",
        shortFlag: "t",
      },
      from: {
        type: "string",
        shortFlag: "f",
      },
    },
  }
);

run(cli.input.at(0) || '', cli.flags);
