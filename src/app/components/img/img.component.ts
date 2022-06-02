import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/no-image.png';

  @Output() texto = new EventEmitter<string>();
  txt: string = 'Mensaje enviado desde el hijo';

  constructor() { }

  ngOnInit(): void {
    this.texto.emit(this.txt);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
