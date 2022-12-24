import { IStarWars } from '../state/star-wars.model';
import { initialState } from '../state/star-wars.state';
import { createReducer, on } from '@ngrx/store';

import * as GetStarWars from "./star-wars.action"

export const reducers = createReducer(
    initialState,
    on(GetStarWars.getStarWarsAction, (state:any) => ({
        ...state,
        isLoading: true
    })),

    on(GetStarWars.getStarWarsActionSuccess,(state:any,action) => ({
        ...state,
        isLoading:false,
        starars:action.starWars
    })),

    on(GetStarWars.getStarWarsActionFail,(state:any,action) => ({
        ...state,
        isLoading:true,
        error:action.error
    }))
)