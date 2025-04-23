
import { Card } from "flowbite-react";
import { ProyectItem } from "./ProyectItem";

export function Proyect() {
  return (
    <Card
      className="max-w-sm flex"
    >
      <ProyectItem class='flex' />
      <ProyectItem class='flex'/>
      <ProyectItem class='flex'/>
    </Card>
  );
}

