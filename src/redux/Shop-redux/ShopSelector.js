import { createSelector } from "reselect";



const ShopCollection = state => state.Shop;

export const SelectShopCollection = createSelector(
    [ShopCollection],

    Shop => Shop.ShopData
)

export const SelectCollectionForPreview = createSelector(
    [SelectShopCollection],
    ShopData=>Object.keys(ShopData).map(key=> ShopData[key])
)


export const SelectCollection = CollectionURLParam => createSelector(
    [SelectShopCollection],
    ShopData => ShopData[CollectionURLParam]
)