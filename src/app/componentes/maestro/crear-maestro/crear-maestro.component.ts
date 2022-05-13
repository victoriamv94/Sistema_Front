import { Component, OnInit } from '@angular/core';
import { MaestroService } from 'src/app/services/maestro.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-maestro',
  templateUrl: './crear-maestro.component.html',
  styleUrls: ['./crear-maestro.component.css']
})
export class CrearMaestroComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    public maestroService: MaestroService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nombre:  new FormControl('juan', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellidos: new FormControl('lopez', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      edad: new FormControl('5', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      telefono: new FormControl('97586758576', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      correo: new FormControl('valis@gmail.com', [ Validators.required, Validators.email ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.maestroService.create(this.form.value).subscribe(res => {
         console.log('Maestro created successfully!');
         this.router.navigateByUrl('listaMaestros');
    })
  }

}
