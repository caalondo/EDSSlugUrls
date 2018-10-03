import { Component, OnInit } from '@angular/core';
import slugify from 'slugify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.jsonData = '';
    this.errorMessage = '';
  }

  public jsonData: string;
  public finalData: any;
  public errorMessage: string;

  static suglifyString (str) {
    return slugify(str, {
      replacement: '-',
      lower: true
    });
  }

  static suglifyList (convertedData) {
    const finalData = [];
    for (const item of convertedData) {
      const new_item = {
        'categoria': this.suglifyString(item['categoria']),
        'tema': this.suglifyString(item['tema']),
        'url-slug': this.suglifyString(item['pregunta']),
        'pregunta': item['pregunta']
      };
      finalData.push(new_item);
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
    const convertedData = this.convertToJson();
    if (convertedData && Array.isArray(convertedData)) {
      this.finalData = HomeComponent.suglifyList(convertedData);
      console.log('finalData: ', this.finalData);
    } else {
      this.errorMessage = 'Error al convertir JSON. Verifica el valor ingresado';
    }
  }

}
