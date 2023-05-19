export abstract class DataType<T> {
  abstract encode(value: string): T;
  abstract decode(value: T): string;
}