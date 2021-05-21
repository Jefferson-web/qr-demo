import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../clases/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: Product[] = [];
  elementType: NgxQrcodeElementTypes = NgxQrcodeElementTypes.URL;
  correctionLevel: NgxQrcodeErrorCorrectionLevels = NgxQrcodeErrorCorrectionLevels.LOW;

  constructor(private _productoService: ProductService) { }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(response => {
      this.productos = response;
    });
  }

}
