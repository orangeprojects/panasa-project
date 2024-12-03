import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contactanos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contáctanos - Panasa</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block mb-2">Nombre</label>
          <Input id="nombre" placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <Input id="email" type="email" placeholder="tu@email.com" />
        </div>
        <div>
          <label htmlFor="mensaje" className="block mb-2">Mensaje</label>
          <Textarea id="mensaje" placeholder="Tu mensaje aquí" />
        </div>
        <Button type="submit">Enviar mensaje</Button>
      </form>
    </div>
  )
}

