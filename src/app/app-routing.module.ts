import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredicateExampleComponent } from './predicate-example/predicate-example.component';

const routes: Routes = [
  {path: "predicate-example", component: PredicateExampleComponent},
  {path: "",redirectTo:"predicate-example", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
