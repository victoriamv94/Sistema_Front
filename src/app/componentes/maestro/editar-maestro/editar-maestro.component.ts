import { Component, OnInit } from '@angular/core';
import { MaestroItem } from 'src/app/modulos/maestroItem';
import { MaestroService } from 'src/app/services/maestro.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-maestro',
  templateUrl: './editar-maestro.component.html',
  styleUrls: ['./editar-maestro.component.css']
})
export class EditarMaestroComponent implements OnInit {

  id: number = 0;
  maestro: MaestroItem = new MaestroItem;
  form: FormGroup = new FormGroup({});

  constructor(
    public maestroService: MaestroService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idMaestro'];
    this.maestroService.find(this.id).subscribe((data: MaestroItem)=>{
      this.maestro = data;
    });

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
    this.maestroService.update(this.id, this.form.value).subscribe(res => {
         console.log('Person updated successfully!');
         this.router.navigateByUrl('person/index');
    })
  }

}
