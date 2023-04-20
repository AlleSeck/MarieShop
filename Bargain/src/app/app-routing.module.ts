import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PanierComponent } from './panier/panier.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:"accueil", component: AccueilComponent},
  {path:"produits", component: ArticleComponent},
  {path:"panier", component: PanierComponent},
  {path:"contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
