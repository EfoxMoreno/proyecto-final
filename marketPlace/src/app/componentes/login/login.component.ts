import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

nombre?: string;
contraseya?: string;

constructor(private usuarios: UsuariosServiceService){

}

ngOnInit(): void {
  this.usuarios.getUsuarios().subscribe({
    next: (ok) => {
      console.log(ok);
    },
    error: (err) => {
      console.log(err);
    }
  });
}

loginUser(){
  
}

}
