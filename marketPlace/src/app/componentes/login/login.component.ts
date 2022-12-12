import { Component } from '@angular/core';
import { UsuariosServiceService } from 'src/app/servicios/usuarios-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

nombre?: string;
contraseya?: string;

constructor(private usuarios: UsuariosServiceService){

}

loginUser(){
  this.usuarios.getUsuarios().subscribe({
    next: (ok) => {
      ok.forEach(element => {
        let nombreUsuario = this.nombre;
        let nombreServidor = element.nombre;
        nombreUsuario = nombreUsuario?.toLowerCase();
        nombreServidor = nombreServidor?.toLowerCase();
        if(nombreServidor === nombreUsuario && element.contraseya === this.contraseya){
          console.log(nombreUsuario);
        }
        else { 
          alert("Datos Erroneos");
        }
      });
    },
    error: (err) => {
      console.log(err);
    }
  });
}

}
