import { Asset } from "../models";
import Image from "next/image";
export function AssetShow(props: {asset: Asset}){
    const {asset} = props;
    return (
          <div className="flex items-center justify-center space-x-1">
                  <div className="content-center" >
              <Image 
              src={asset.image_url} width={30} height={30} alt={asset.symbol} />
              </div>
              <div className="flex flex-col text-gray-500 text-sm">
                <span>{asset.name}</span>
                <span>{asset.symbol}</span>
        
              </div>
              </div>
    )

}