import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  @ViewChild("txtCodigo") txtCodigo?: ElementRef;
  value: string = '';

  constructor(private _snackBar: MatSnackBar,
              private _productService: ProductService) { }

  ngOnInit(): void {
    
  }

  openSnackBar(){
    this._productService.findById(this.value).subscribe(response => {
      this._snackBar.open('Producto Agregado');
      this.txtCodigo?.nativeElement.focus();
      console.log(response);
    }, (error: any) => {
      this._snackBar.open('Error: El producto no existe');
      this.txtCodigo?.nativeElement.focus();
    });
    this.value = '';
  }

}
