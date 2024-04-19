import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface IBridgeCard {
    action: string;
    showAssets: boolean;
    showNetworks: boolean;
    setNetwork: Dispatch<SetStateAction<boolean>>;
    setAsset: Dispatch<SetStateAction<boolean>>;
    extraStyles?: string;
    to: boolean;
}

export type ConnectProps = {
    styles: string;
}

export type Networks = {
    id: number;
    title: string;
    Logo: StaticImageData 
}

export interface INetwork {
    id: number;
    name: string;
    chainId: number;
    logo: StaticImageData;
}

export type TxHeaderType = {
   headers: {
       id: number;
       title: string;
    }[]
    sliceFrom: number;
    sliceTo: number;
    styles: string;
}