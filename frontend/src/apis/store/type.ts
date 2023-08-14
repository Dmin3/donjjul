export interface IGetStore {
  id: number;
  name: string;
  industryName: string;
  city: string;
  streetAddress: string;
  groundAddress: string;
  detailAddress: string;
  openTime: string | null;
  zipCode: string;
  providedItem: string;
  provided_1: string;
  provided_2: string;
  latitude: number;
  longitude: number;
}

export interface IGetStoreListRes extends Array<IGetStore> {}
