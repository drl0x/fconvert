import { DataType } from "../dataType";

export class BytesDataType extends DataType<ArrayBuffer> {
  encode(value: string): ArrayBuffer {
    var enc = new TextEncoder();
    return enc.encode(value).buffer;
  }
  decode(value: ArrayBuffer): string {
    var enc = new TextDecoder("utf-8");
    return enc.decode(value);
  }
}
