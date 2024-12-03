import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function Carrito() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Carrito de compras - Panasa</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Producto</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Producto de ejemplo</TableCell>
            <TableCell>1</TableCell>
            <TableCell>$10.00</TableCell>
            <TableCell>$10.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-6">
        <Button>Proceder al pago</Button>
      </div>
    </div>
  )
}

