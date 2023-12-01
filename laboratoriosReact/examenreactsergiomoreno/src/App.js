import React, { Component } from 'react';
import LibrosTable from './LibrosTable';
import LibrosPrestadosTable from './LibrosPrestadosTable';

export default class App extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            libros: [
                { id: 1, titulo: 'Pedro picapiedra', stock: 5 },
                { id: 2, titulo: 'Diccionario', stock: 1 },
                { id: 3, titulo: 'El libro Fantastico', stock: 5 },
                { id: 4, titulo: 'La Biblia', stock: 0 }
            ],
            //array donde se añaden los libros ya prestados
            librosPrestados: [],
        };
    }
    //Funcionalidad
    prestarLibro = (libroSeleccionado) => {
        const { libros, librosPrestados } = this.state;

        const librosActualizados = libros.map((libro) => {
            if (libro.id === libroSeleccionado.id && libro.stock > 0) {
                return { ...libro, stock: libro.stock - 1 };
            }
            return libro;
        });

        const libroYaPrestado = librosPrestados.find((libro) => libro.id === libroSeleccionado.id);
        //Si el libro ya ha sido prestado se añade al array
        if (!libroYaPrestado) {
            this.setState({
                libros: librosActualizados,
                librosPrestados: [
                    ...librosPrestados,
                    {
                        id: libroSeleccionado.id,
                        titulo: libroSeleccionado.titulo,
                        fechaPrestamo: new Date().toLocaleDateString(),
                    },
                ],
            });
        }
    };

    devolverLibro = (libroDevuelto) => {
        const { libros, librosPrestados } = this.state;

        const librosActualizados = libros.map((libro) => {
            if (libro.id === libroDevuelto.id) {
                return { ...libro, stock: libro.stock + 1 };
            }
            return libro;
        });

        const librosPrestadosActualizados = librosPrestados.filter(
            (libro) => libro.id !== libroDevuelto.id
        );

        this.setState({
            libros: librosActualizados,
            librosPrestados: librosPrestadosActualizados,
        });
    };

    incrementarStock = () => {
        const { libros } = this.state;

        const librosActualizados = libros.map((libro) => ({
            ...libro,
            stock: libro.stock + 5,
        }));

        this.setState({ libros: librosActualizados });
    };
    //render
    render() {
        return (
            <div className="mt-3">
                <h1 className="bg-primary text-center text-white p-3">Biblioteca Municipal</h1>

                <div className="Container">
                    <h2 className="bg-success text-center text-white p-2">Libros en biblioteca</h2>
                    <div className="Container">
                        <LibrosTable libros={this.state.libros} prestar={this.prestarLibro} />
                    </div>
                    <div className="Container">
                        <h2 className="bg-danger text-center text-white p-2">Libros Prestados</h2>
                        <LibrosPrestadosTable librosPrestados={this.state.librosPrestados} devolver={this.devolverLibro} />
                    </div>
                </div>

            </div>
        );
    }
}