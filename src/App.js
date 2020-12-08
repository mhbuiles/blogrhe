import planDeNegocios from './files/planDeNegocios.pdf';
import proyecciones from './files/proyecciones.pdf';
import proyectoDeAcuerdo from './files/proyectoDeAcuerdo.pdf';
import actaResolObjecConfirmAcuerdo from './files/actaResolObjecConfirmAcuerdo.pdf';
import eeffJun30 from './files/eeffJun30.pdf';
import eeffSep30 from './files/eeffSep30.pdf';
import notasEeffJun30 from './files/notasEeffJun30.pdf';
import notasEeffSep30 from './files/notasEeffSep30.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        PROCESO DE REORGANIZACIÓN ABREVIADA PERSONA NATURAL COMERCIANTE RAMIRO HERRERA ESTRADA
        <br></br>
        C.C. 3'370.667
      </h1>
      <br></br>
      <h2>ANTECEDENTES</h2>
      <br></br>
      <ol>
        <li>
          A través del auto 630-00779 del 24 de Junio de 2020 se admitió un proceso de 
          reorganización abreviado a la persona natural comerciante RAMIRO HERRERA ESTRADA. 
        </li>
        <br></br>
        <li>
          Por radicado 2020-01-523191 del 25 de septiembre 2020 la deudora remitió la 
          actualización de inventario de activos y pasivos a 23 de junio de 2020. 
        </li>
        <br></br>
        <li>
          Mediante el radicado 2020-03-007945 del 18 de agosto de 2020 el promotor allegó
          el proyecto de calificación y graduación de créditos y derechos de voto.  
        </li>
        <br></br>
        <li>
          En el expediente concursal obran las objeciones presentadas por los acreedores:
          <ul>
            <br></br>
            <li>
              Bancolombia mediante radicado 2020-01-429431 y 2020-01-439430 del 18 de agosto de
              2020 y 20 de agosto de 2020. 
            </li>
            <br></br>
            <li>
              Banco Agrario mediante radicado 2020-01-447718 del 24 de agosto de 2020.
            </li>
            <br></br>
            <li>
              Banco Davivienda mediante radicado 2020-01-461538 del 24 de agosto de 2020.
            </li>
            <br></br>
            <li>
              DIAN mediante radicado 2020-01-450125 del 24 de agosto de 2020 y 2020-01-510694 del 
              14 de septiembre de 2020. 
            </li>
            <br></br>
            <li>
              CISA mediante radicado 2020-01-512000 del 15 de septiembre de 2020.
            </li>
            <br></br>
            <li>
              Distrito de Barranquilla mediante radicado 2020-07-006008 de octubre 2 de 2020.
            </li>
          </ul> 
        </li>
        <br></br>
        <li>
          A través del auto 630-000983 del 19 de agosto de 2020 se citó a la reunión de conciliación de 
          objeciones para el día 21 de septiembre de 2020. Por auto 630-001130 del 25 de septiembre, 
          aclarado mediante auto 630-001148 del 28 de septiembre del 2020 el despacho dispuso fecha de 
          continuación de reunión de conciliación de objeciones para el día 8 de octubre de 2020 a las 
          2:00 pm. 
        </li>
        <br></br>
        <li>
          A través del radicado 2020-01-542972 el promotor allegó al despacho el acta de reunión de 
          conciliación de objeciones, plan de negocios y proyecciones financieras.  
        </li>
        <br></br>
        <li>
          Mediante el auto 630-001258 del día 9 de noviembre de 2020, corregido por el auto 630-001286 del 
          12 de noviembre de 2020 se convoca a la audiencia de resolución de objeciones y confirmación del 
          acuerdo de reorganización para el día 2 de diciembre de 2020 a las 2:00 pm.
        </li>
        <br></br>
      </ol>
      <div className = 'links'>
        <h2>Documentos soporte:</h2>
        <a href = {actaResolObjecConfirmAcuerdo} target = '_blank' rel = 'noreferrer'>Acta de resolución de objeciones y confirmación del acuerdo</a>
        <br></br>
        <a href = {eeffJun30} target = '_blank' rel = 'noreferrer'>Estados financieros a 30 de junio de 2020</a>
        <br></br>
        <a href = {eeffSep30} target = '_blank' rel = 'noreferrer'>Estados financieros a 30 de septiembre de 2020</a>
        <br></br>
        <a href = {notasEeffJun30} target = '_blank' rel = 'noreferrer'>Notas a los estados financieros a 30 de junio de 2020</a>
        <br></br>
        <a href = {notasEeffSep30} target = '_blank' rel = 'noreferrer'>Notas a los estados financieros a 30 de septiembre de 2020</a>
        <br></br>
        <a href = {planDeNegocios} target = '_blank' rel = 'noreferrer'>Plan de negocios</a>
        <br></br>
        <a href = {proyecciones} target = '_blank' rel = 'noreferrer'>Proyecciones</a>
        <br></br>
        <a href = {proyectoDeAcuerdo} target = '_blank' rel = 'noreferrer'>Proyecto de acuerdo</a>
        <br></br>
      </div>
      <div className = 'contact'>
        <div className = 'contactInfo'>
          <h2>Contacto:</h2>
          <p><span>Promotor:</span> Ramiro Herrera Estrada</p>
          <p><span>Dirección:</span> Carrera 6 # 90 - 52</p>
          <p><span>Teléfono:</span> 3114033324</p>
          <p>Barranquilla, Colombia.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
