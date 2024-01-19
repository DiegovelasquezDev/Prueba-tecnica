import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Tabla = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Datos</h2>

      <Table aria-label="Tabla de datos">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
          <TableColumn>Acciones</TableColumn>
        </TableHeader>

        {!data || data.lenght === 0 ? (
          <TableBody emptyContent={"No hay filas para mostrar."}>
            {[]}
          </TableBody>
        ) : (
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.key}>{item[column.key]}</TableCell>
                ))}
                <TableCell onClick={() => onEdit(item)}>Editar</TableCell>
                <TableCell onClick={() => onDelete(item)}>Eliminar</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default Tabla;
