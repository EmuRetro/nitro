import { IProductData } from '@nitro/renderer';
import { GetSessionDataManager } from './GetSessionDataManager';

export function GetProductDataForLocalization(localizationId: string): IProductData
{
    if(!localizationId) return null;

    return GetSessionDataManager().getProductData(localizationId);
}
