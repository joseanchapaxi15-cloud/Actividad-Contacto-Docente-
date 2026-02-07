import { AreaCuadrado } from './typescript/AreaCuadrado';
import { SumarValores } from './typescript/SumaElementos'; 
import { ArregloObjetos } from './typescript/FuncionMap';   
import { CalculoPromedio } from './typescript/Promedio';    
import { HookContador } from './typescript/Contador';       
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="alert alert-primary text-center">
        <h2 className="mb-0">Inge  calificara con corazon de madre :')</h2>
        <p className="mb-0 mt-2">Estudiante: <strong>Jose Luis Anchapaxi</strong></p>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-6 mb-4"><AreaCuadrado /></div>
        <div className="col-md-6 mb-4"><SumarValores /></div>
        <div className="col-md-6 mb-4"><ArregloObjetos /></div>
        <div className="col-md-6 mb-4"><CalculoPromedio /></div>
        <div className="col-12 mb-4"><HookContador /></div>
      </div>
    </div>
  )
}

export default App;