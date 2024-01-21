import React, { useEffect } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import useForm from "../utils/hooks/useForm";
import { useSnackbar } from "notistack";

const opcionesTipoVivienda = [
  { label: "Unifamiliar", value: "unifamiliar" },
  { label: "Colectiva", value: "colectiva" },
];

const opcionesZona = [
  { label: "Rural", value: "Rural" },
  { label: "Urbana", value: "Urbana" },
];

const viviendaModel = {
  Id: null,
  TipoDeVivienda: "",
  Zona: "",
  Direccion: "",
  Precio: 0,
  Tamano: 0,
  Observaciones: "",
};

const Formulario = ({
  createData,
  updateData,
  DataEdit,
  setDataEdit,
  enqueueSnackbar,
}) => {
  const { handleChange, formState, setFormState } = useForm(viviendaModel);

  useEffect(() => {
    if (DataEdit) {
      setFormState(DataEdit);
    } else {
      setFormState(viviendaModel);
    }
  }, [DataEdit]);

  const onResetForm = () => {
    setFormState(viviendaModel);
    setDataEdit(null);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      !formState.TipoDeVivienda ||
      !formState.Zona ||
      !formState.Direccion ||
      !formState.Precio ||
      !formState.Tamano
    ) {
      enqueueSnackbar("Faltan datos por llenar", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });

      return;
    }

    if (formState.Id === null) {
      createData(formState);
    } else {
      updateData(formState);
    }

    onResetForm();
    setDataEdit(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">
        {!DataEdit ? "Crear nueva vivienda" : "Editar vivienda"}
      </h2>

      <form onSubmit={onSubmitForm}>
        <Select
          label="Tipo de vivienda"
          multiple
          className="mb-4"
          isRequired
          name="TipoDeVivienda"
          value={formState.TipoDeVivienda}
          onChange={handleChange}
        >
          {opcionesTipoVivienda.map((tipo) => (
            <SelectItem key={tipo.value} value={tipo.value}>
              {tipo.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Zona"
          multiple
          className="mb-4"
          isRequired
          name="Zona"
          value={formState.Zona}
          onChange={handleChange}
        >
          {opcionesZona.map((tipo) => (
            <SelectItem key={tipo.value} value={tipo.value}>
              {tipo.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Dirección"
          className="mb-4"
          name="Direccion"
          value={formState.Direccion}
          onChange={handleChange}
          isRequired
        />
        <Input
          label="Precio"
          type="number"
          className="mb-4"
          name="Precio"
          value={formState.Precio}
          onChange={handleChange}
          isRequired
        />
        <Input
          label="Tamaño"
          type="number"
          className="mb-4"
          name="Tamano"
          value={formState.Tamano}
          onChange={handleChange}
          isRequired
        />
        <Textarea
          label="Observaciones"
          className="mb-4"
          name="Observaciones"
          value={formState.Observaciones}
          onChange={handleChange}
        />

        <div className="flex justify-center mt-4">
          <Button color="primary" type="submit" className="mr-2">
            {!DataEdit ? "Registrar" : "Editar"}
          </Button>
          <Button color="warning" onClick={onResetForm}>
            Limpiar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
