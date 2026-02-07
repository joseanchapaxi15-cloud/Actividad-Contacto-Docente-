
export const CalculoPromedio = () => {
    const listadoEstudiantes = [
        { nombre: "Stefani", edad: 19, nota: 9 },
        { nombre: "Cristin", edad: 20, nota: 10 },
        { nombre: "Jose", edad: 18, nota: 7 }
    ];

    const obtenerPromedio = (): number => {
        const sumaTotal = listadoEstudiantes.reduce((acumulador, alumno) => acumulador + alumno.nota, 0);
        return sumaTotal / listadoEstudiantes.length;
    };

    return (
        <section className="card shadow border-0">
            <div className="card-body">
                <h5 className="card-title text-primary border-bottom pb-2">Registro de Notas</h5>

                <div className="list-group list-group-flush">
                    {listadoEstudiantes.map((estudiante, index) => (
                        <div key={index} className="list-group-item d-flex justify-content-between align-items-center p-1">
                            <small>{estudiante.nombre}</small>
                            <span className="badge bg-secondary rounded-pill">{estudiante.nota}</span>
                        </div>
                    ))}
                </div>

                <div className="alert alert-warning mt-3 text-center p-2">
                    <strong>Promedio: </strong> 
                    <span className="fs-6">{obtenerPromedio().toFixed(2)}</span>
                </div>
            </div>
        </section>
    );
};