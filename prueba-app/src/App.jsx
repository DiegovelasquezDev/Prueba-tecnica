import { Formulario, Tabla } from "./components";

const columns = [
  { key: "TipoDeVivienda", label: "Tipo de vivienda" },
  { key: "Zona", label: "Zona" },
  { key: "Direccion", label: "Direccion" },
  { key: "Precio", label: "Precio" },
  { key: "Tamano", label: "Tamaño" },
];

function App() {
  function handleEdit(user) {
    console.log("Soy editar usuarios: ", user);
  }

  function handleDelete(user) {
    console.log("Soy eliminar usuarios: ", user);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">Prueba Técnica</h1>

      <div className="flex w-full justify-center">
        <div className="w-1/2 pr-4">
          <Formulario />  
        </div>

        <div className="w-1/2 pl-4">
          <Tabla
            columns={columns}
            data={""}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
