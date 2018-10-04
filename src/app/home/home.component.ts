import { Component, OnInit } from '@angular/core';
import slugify from 'slugify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public jsonData: string;
  public finalData: any;
  public errorMessage: string;
  public stringData: string;

  constructor() {
    this.jsonData = '';
    this.errorMessage = '';
    this.stringData = '';
  }

  static suglifyString (str) {
    return slugify(str, {
      replacement: '-',
      lower: true
    });
  }

  static suglifyList (convertedData) {
    const finalData = [];
    const listUrls = [];
    for (const item of convertedData) {
      const new_item = {
        'categoria': item['categoria'],
        'slug-categoria': this.suglifyString(item['categoria']),
        'tema': item['tema'],
        'slug-tema': this.suglifyString(item['tema']),
        'url-tema': '/' + this.suglifyString(item['categoria']) + '/' + this.suglifyString(item['tema']) + '/',
        'pregunta': item['pregunta'],
        'slug-pregunta': this.suglifyString(item['pregunta'])
      };
      finalData.push(new_item);
      listUrls.push(new_item['url-slug']);
    }
    return finalData;
  }

  ngOnInit() {}

  convertToJson () {
    this.errorMessage = '';
    let data = '';
    try {
      data = JSON.parse(this.jsonData);
    } catch (e) {
      this.errorMessage = 'Error al convertir JSON. Verifica el valor ingresado';
      return false;
    }
    return data;
  }

  convertJsonAndCreateUrls () {
    this.finalData = '';
    const convertedData = this.convertToJson();
    if (convertedData && Array.isArray(convertedData)) {
      this.finalData = JSON.stringify(HomeComponent.suglifyList(convertedData));
      console.log('finalData: ', this.finalData);
    } else {
      this.errorMessage = 'Error al convertir JSON. Verifica el valor ingresado';
    }
  }

  convertToUrl () {
    this.finalData = HomeComponent.suglifyString(this.stringData);
  }

  cleanResponse () {
    this.errorMessage = '';
    this.finalData = '';
  }
}
