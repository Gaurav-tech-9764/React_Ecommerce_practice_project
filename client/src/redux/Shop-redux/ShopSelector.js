import { createSelector } from "reselect";



const ShopCollection = state => state.Shop;

export const SelectShopCollection = createSelector(
    [ShopCollection],

    Shop => Shop.ShopData
)

export const SelectCollectionForPreview = createSelector(
    [SelectShopCollection],
    ShopData=>ShopData ? Object.keys(ShopData).map(key=> ShopData[key]) : []
)


export const SelectCollection = CollectionURLParam => createSelector(
    [SelectShopCollection],
    ShopData => ShopData ? ShopData[CollectionURLParam] : []
)


export const SelectIsCollectionFetching = createSelector(
    [ShopCollection],
    Shop=> Shop.isFetching
)

export const SelectIsCollectionLoaded = createSelector(
    [ShopCollection],
    Shop => !!Shop.ShopData
)