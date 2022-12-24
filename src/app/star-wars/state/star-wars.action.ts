import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { IStarWars } from './star-wars.model';
import { StarWarsActionType } from './star-wars.types';

export const getStarWarsAction = createAction(
    StarWarsActionType.GETSTARWARS,
)

export const getStarWarsActionSuccess = createAction(
    StarWarsActionType.GETSTARWARSSUCCESS,
    props<{ starWars: IStarWars[] }>()
)

export const getStarWarsActionFail = createAction(
    StarWarsActionType.GETSTARWARSFAIL,
    props<{ error: string }>()
)