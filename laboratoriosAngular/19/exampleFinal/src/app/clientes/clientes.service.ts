import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[] | any;
  private grupos: Grupo[] | undefined;
  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: ""
      },
      {
        id: 1,
        nombre: "Prisa"
      },
      {
        id: 2,
        nombre: "Mediaset"
      },
      {
        id: 3,
        nombre: "Otros"
      }

    ];
    this.clientes = [];

  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }
}
