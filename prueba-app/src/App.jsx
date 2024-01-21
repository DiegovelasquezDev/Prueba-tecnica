import { useEffect, useState } from "react";
import { Formulario, Tabla } from "./components";
import { ColumnsVivienda, BdVivienda } from "./data";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const [BdDatosVivienda, setBdDatosVivienda] = useState([]);
  const [DataEdit, setDataEdit] = useState(null);

  useEffect(() => {
    setBdDatosVivienda(BdVivienda);
  }, []);

  const createData = (data) => {
    data.Id = uuidv4();
    if (!data.Observaciones) {
      data.Observaciones = "Sin observaciones";
    }
    setBdDatosVivienda([...BdDatosVivienda, data]);

    enqueueSnackbar("Se registro con exito", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const updateData = (data) => {
    let newData = BdDatosVivienda.map((item) =>
      item.Id === data.Id ? data : item
    );

    setBdDatosVivienda(newData);

    enqueueSnackbar("Se modifico con exito", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const deleteData = (Id) => {
    let isDelete = window.confirm(
      "¿Estas seguro de que deseas eliminar el registro?"
    );

    if (isDelete) {
      let newData = BdDatosVivienda.filter((item) => item.Id !== Id);
      setBdDatosVivienda(newData);
      enqueueSnackbar("Se elimino con exito el registro", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">Prueba Técnica</h1>

      <div className="w-full lg:flex">
        <div className="lg:w-1/2 pl-0 pr-2 mb-4 lg:mb-0">
          <Formulario
            createData={createData}
            updateData={updateData}
            DataEdit={DataEdit}
            setDataEdit={setDataEdit}
            enqueueSnackbar={enqueueSnackbar}
          />
        </div>

        <div className="lg:w-1/2 ml-6 mr-6 mb-4 lg:mb-0">
          <Tabla
            columns={ColumnsVivienda}
            data={BdDatosVivienda}
            setDataEdit={setDataEdit}
            deleteData={deleteData}
            enqueueSnackbar={enqueueSnackbar}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
