import { DataType } from "../dataType.js";

export class Base64DataType extends DataType<string> {
  encode(value: string): string {
    return Buffer.from(value, "binary").toString("base64");
  }
  decode(value: string): string {
    return Buffer.from(value, "base64").toString("binary");
  }
}
