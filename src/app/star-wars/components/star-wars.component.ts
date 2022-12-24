import { Component, OnInit } from "@angular/core";

import { select, Store } from "@ngrx/store"
import { getStarWarsAction } from "../state/star-wars.action";

import * as GetAction from "../state/star-wars.action"
import { Observable } from "rxjs";
import { selectFeature } from "../state/star-wars.selectors";
import { ErrorStarWars, GetStarWars, IsLoadingStarWars } from "../state/star-wars.selectors";

@Component({
    selector: "app-star-wars",
    templateUrl: "./star-wars.component.html",
    styleUrls: ["./star-wars.component.scss"]
})

export class StarWarsComponent implements OnInit {

    public IsLoading$!: Observable<boolean>;
    public StarWarsList$!: Observable<any[]>;
    public error$!: Observable<string>

    constructor(
        private _store: Store
    ) { }

    public ngOnInit(): void { }

    public getStarWars(): void {
        this._store.dispatch(GetAction.getStarWarsAction())
        this.IsLoading$ = this._store.pipe(select(IsLoadingStarWars)),
        this.StarWarsList$ = this._store.pipe(select(GetStarWars)),
        this.error$ = this._store.pipe(select(ErrorStarWars))            
           
    }
}