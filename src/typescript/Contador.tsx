import { useState } from "react";

// El nombre debe ser EXACTAMENTE HookContador para que coincida con App.tsx
export const HookContador = () => {
    const [valor, setValor] = useState<number>(0);

    const actualizarPuntaje = (cantidad: number) => {
        setValor(prev => prev + cantidad);
    };

    return (
        <article className="card border-info shadow-sm">
            <div className="card-body text-center">
                <h5 className="card-title text-info mb-3">Contador Dinámico</h5>
                
                <div className="display-6 mb-3">
                    <span className="fw-bold text-dark">{valor}</span>
                </div>

                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-primary px-3"
                        onClick={() => actualizarPuntaje(5)}>
                        +5
                    </button>
                    
                    <button
                        type="button"
                        className="btn btn-danger px-3"
                        onClick={() => actualizarPuntaje(-5)}>
                        -5
                    </button>
                </div>
            </div>
        </article>
    );
};