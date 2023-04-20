import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
   
  titreArticle : string = "Titre de l'article";
  prixArticle : number = 12
  textAltImg : string = "Titre alternative de l'image ";
  urlImage : string = "https://via.placeholder.com/400*250";
  totalLikes : number = 0;



  constructor(){}


  ngOnInit(): void {
      
  }
  onLike(){
    this.totalLikes++;
  }
}
