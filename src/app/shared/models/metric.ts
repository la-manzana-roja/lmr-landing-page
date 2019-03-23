import { DataType } from './data-type';

export interface Metric extends DataType {
  id: string;
  icon: string;
  name: string;
  number: string;
}
