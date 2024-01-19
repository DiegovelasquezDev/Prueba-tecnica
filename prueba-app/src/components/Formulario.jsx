import React from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import useForm from "../utils/hooks/useForm";

const opcionesTipoVivienda = [
  { label: "Unifamiliar", value: "unifamiliar" },
  { label: "Colectiva", value: "colectiva" },
];

const opcionesZona = [
  { label: "Rural", value: "Rural" },
  { label: "Urbana", value: "Urbana" },
];

const viviendaModel = {
  Id: "",
  TipoDeVivienda: "",
  Zona: "",
  Direccion: "",
  Precio: "",
  Tamano: "",
  Observaciones: "",
};

const Formulario = () => {
  const { handleChange, formState } = useForm(viviendaModel);

  const onCreateVivienda = (e) => {
    e.preventDefault();
    console.log("New vivienda: ", formState);

    

  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Formulario</h2>

      <form onSubmit={onCreateVivienda}>
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
          <Button color="primary" type="submit">
            Registrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
