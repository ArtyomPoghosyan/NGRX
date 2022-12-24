import { createSelector } from "@ngrx/store";

export const selectFeature = (state: any) => state

export const IsLoadingStarWars = createSelector(
    selectFeature,
    (state) => state.isLoading
)

export const GetStarWars = createSelector(
    selectFeature,
    (state) => state['star-wars'].starars

)

export const ErrorStarWars = createSelector(
    selectFeature,
    (state) => state.error
)