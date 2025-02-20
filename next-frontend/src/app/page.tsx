import Image from "next/image";
import {Table, TableHead,TableHeadCell,TableRow,TableCell, Button, TableBody} from "flowbite-react";
export default function AssetsList() {
  return (
   <div className="flex flex-col space-y-5 flex-grow">
 <article className="format">
  <h1>Minha carteira</h1>
 </article>
 <div className="overflow-x auto w-full">
  <Table className="w-full h-full table-fixed" >
  <TableHead>
    <TableHeadCell>Ativo</TableHeadCell>
    <TableHeadCell>Cotação</TableHeadCell>
    <TableHeadCell>Quantidade</TableHeadCell>
    <TableHeadCell>Comprar/Vender</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Ativo</TableCell>
      <TableCell>Cotação</TableCell>
      <TableCell>Quantidade</TableCell>
      <TableCell><Button color="light">Comprar/Vender</Button></TableCell>
    </TableRow>

  </TableBody>

  </Table>
 </div>
   </div>
  );
}
