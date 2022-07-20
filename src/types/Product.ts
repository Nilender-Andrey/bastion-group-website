export interface IProduct {
  id: string;
  name: string;
  price: string;
  gost: string;
  type: string;
  imgPath: string;
  isHit: boolean;
  isAction: boolean;
}
export interface IProductType {
  idType: string;
  nameType: string;
}

export interface IShoppingCartItem {
  product: IProduct;
  quantity: number;
  sum?: string;
}
