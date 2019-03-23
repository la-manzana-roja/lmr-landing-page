import { DataType } from './data-type';

export interface New extends DataType {
  id: string;
  url: string;
  title?: string;
  description?: string;
  image?: string;
  views?: number;
}
