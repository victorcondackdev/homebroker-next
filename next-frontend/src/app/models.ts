export type Asset = {
    _id: string;
    name: string;
    symbol: string;
    price: string;
    image_url: string;
}

export type WalletAsset = {
    _id: string;
    asset: Asset;
    shares: number;
}

export type Wallet = {
    _id: string;
    assets: WalletAsset[]

}

export enum OrderStatus{
 PENDING = 'PENDING',
    OPEN = 'OPEN',
    FAILED = 'FAILED',
    CLOSED = 'CLOSED'
}

export enum OrderType{
    PENDING = 'PENDING',
       BUY = 'BUY',
       SELL = 'SELL',
   }
export type Order = {
    _id: string;
    asset: Asset;
    shares: number;
    partial: number;
    price: string;
    type: OrderType;
    status: OrderStatus;

}