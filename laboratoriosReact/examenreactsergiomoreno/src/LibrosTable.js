import React from 'react';

const LibrosTable = ({ libros, prestar }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Stock</th>
                    <th>Prestar</th>
                </tr>
            </thead>
            <tbody>
                {libros.map((libro) => (
                    <tr key={libro.id}>
                        <td>{libro.titulo}</td>
                        <td>{libro.stock}</td>
                        <td>
                            <button className="btn btn-success" onClick={() => prestar(libro)} disabled={libro.stock === 0}>
                                Prestar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LibrosTable;