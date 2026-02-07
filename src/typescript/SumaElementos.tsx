
export const SumarValores = () => {
    const listaNumerica: number[] = [1, 2, 3, 4, 5];

    const calcularTotal = (datos: number[]): number => {
        return datos.reduce((acc, curr) => acc + curr, 0);
    };

    return (
        <div className="card mt-4 border-warning shadow-sm">
            <div className="card-header bg-warning text-dark fw-bold">
                Operación Aritmética
            </div>
            <div className="card-body">
                <p className="card-text d-flex justify-content-between">
                    <span>Elementos a sumar:</span>
                    <span className="badge bg-dark">{listaNumerica.join(' + ')}</span>
                </p>
                <hr />
                <h5 className="text-end">
                    Total Acumulado: <span className="text-danger">{calcularTotal(listaNumerica)}</span>
                </h5>
            </div>
        </div>
    );
};