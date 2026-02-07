export function AreaCuadrado() {
    
    // Función refactorizada con Math.pow para que se vea distinta
    const obtenerSuperficie = (medidaLado: number): number => {
        return Math.pow(medidaLado, 2);
    };

    const resultado = obtenerSuperficie(5);

    return (
        <section className="card shadow-sm mt-4 border-0">
            <div className="card-body p-4">
                <h4 className="text-primary mb-3">Cálculo de Área</h4>
                <p className="fs-5">
                    Para un cuadrado de lado 5, el área resultante es: 
                    <span className="badge bg-success ms-2">{resultado}</span>
                </p>
                <small className="text-muted">Resultado obtenido mediante fórmula matemática.</small>
            </div>
        </section>
    );
}