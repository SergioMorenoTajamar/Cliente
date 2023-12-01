import React from 'react';

const LibrosPrestadosTable = ({ librosPrestados, devolver }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Fecha Prestamo</th>
                    <th>Devolver</th>
                </tr>
            </thead>
            <tbody>
                {librosPrestados.map((libroPrestado) => (
                    <tr key={libroPrestado.id}>
                        <td>{libroPrestado.titulo}</td>
                        <td>{libroPrestado.fechaPrestamo}</td>
                        <td>
                            <button className="btn btn-warning" onClick={() => devolver(libroPrestado)}>Devolver</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LibrosPrestadosTable;