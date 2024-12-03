import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Productos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Productos Panasa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Producto 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Descripción del producto 1</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Producto 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Descripción del producto 2</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Producto 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Descripción del producto 3</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

