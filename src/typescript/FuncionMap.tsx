export const ArregloObjetos = () => {
  const valores: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  const procesarDivision = (datos: number[]): number[] => {
    return datos.map(n => n / 5);
  };

  const resultados = procesarDivision(valores);

  return (
    <section className="card mt-4 shadow border-light">
      <div className="card-body">
        <h5 className="text-secondary fw-bold">Procesamiento de Datos</h5>
        
        <div className="alert alert-secondary mt-3">
          <small className="d-block text-muted">Colección original:</small>
          <code className="text-dark">{valores.join(" | ")}</code>
        </div>

        <div className="alert alert-info">
          <small className="d-block text-muted">Valores reducidos (División / 5):</small>
          <code className="text-primary fw-bold">{resultados.join(" | ")}</code>
        </div>
      </div>
    </section>
  );
} ;