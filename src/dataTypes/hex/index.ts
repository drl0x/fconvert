import { DataType } from "../dataType";

export class HexDataType extends DataType<string> {
  encode(value: string): string {
    return Buffer.from(value, "binary").toString("hex");
  }
  decode(value: string): string {
    return Buffer.from(value, "hex").toString("binary");
  }
}
