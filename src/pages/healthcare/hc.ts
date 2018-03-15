import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HealthcareService } from '../../app/services/healthcare.service';

@Component({
  selector: 'healthcare',
  templateUrl: 'hc.html'
})
export class HealthcarePage {
  fullList: any;
  articles: any;
  language: any;
  constructor(public navCtrl: NavController, private healthcareService:HealthcareService) {
    this.language = 'en';
  }

  ngOnInit(){
    this.getArticles();
  }

  getArticles(){
    this.healthcareService.getArticles()
      .subscribe(response => {
        this.fullList = response.articles;
      },
      (error) => { console.log('ha ocurrido un error') },
      (success) => { 
        this.changeLanguage(this.language);
     });
  }

  changeLanguage(lang){
    console.log('changing language to ' + lang)
    this.articles = this.fullList.filter(post => {
      return post.lang == lang;
    });
  }

  goToArticle(article){
    let url = 'http://www.healthcare.gov' + article.url;
    window.open(url, '_self');
  }
}
