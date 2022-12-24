import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StarWarsComponent } from "./components/star-wars.component";
import { StarWarsService } from "./star-wars.service";
import { reducers } from "./state/star-wars..reducers";
import { starWarsEffect } from "./state/star-wars.effect";

@NgModule({
    declarations: [StarWarsComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature('star-wars',reducers),
        EffectsModule.forFeature([starWarsEffect]),
    ],
    exports: [StarWarsComponent],
    providers: [StarWarsService]
})
export class StarWarsModule {

}