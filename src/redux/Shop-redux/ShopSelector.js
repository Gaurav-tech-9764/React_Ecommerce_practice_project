import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    Hats:1,
    Sneakers:2,
    Jackets:3,
    Womens:4,
    Mens:5
}


const ShopCollection = state => state.Shop;

export const SelectShopCollection = createSelector(
    [ShopCollection],

    Shop => Shop.ShopData
)

export const SelectCollection = CollectionURLParam => createSelector(
    [SelectShopCollection],
    ShopData => ShopData.find(collection=>collection.id == COLLECTION_ID_MAP[CollectionURLParam] )
)