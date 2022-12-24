import { Injectable } from "@angular/core";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";

import * as GetStarWars from "./star-wars.action"

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StarWarsService } from "../star-wars.service";

@Injectable()
export class starWarsEffect {

    constructor(
        private _action: Actions,
        private starWarsService: StarWarsService
    ) { }

    public getStarWars$ = createEffect(() => this._action
        .pipe(
            ofType(GetStarWars.getStarWarsAction),
            switchMap(()=>{
                return this.starWarsService.getStarWars()
                .pipe(
                    map((starWars:any)=>GetStarWars.getStarWarsActionSuccess({starWars})),
                    catchError((error) => of(GetStarWars.getStarWarsActionFail({error:error.message})))
                )
            })
        ))
}

