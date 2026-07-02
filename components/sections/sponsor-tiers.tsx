import { Check, Minus } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { deliverableMatrix, sponsorTiers } from "@/config/sponsors"
import { cn } from "@/lib/utils"

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-devfest-green" aria-label="Incluido" />
  }
  if (value === false) {
    return <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" aria-label="No incluido" />
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>
}

export function SponsorTiers() {
  return (
    <Section id="paquetes">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-devfest-blue">$ paquetes</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Paquetes de patrocinio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Elige el nivel de visibilidad y activación que mejor se alinee con tus objetivos. Todos
            los paquetes son personalizables.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {sponsorTiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                "relative flex flex-col transition-transform duration-300 hover:-translate-y-1",
                tier.highlighted
                  ? "border-devfest-blue shadow-lg ring-2 ring-devfest-blue/20"
                  : "border-border",
              )}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-devfest-blue text-white hover:bg-devfest-blue">
                  Más popular
                </Badge>
              )}
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                {tier.priceLabel && (
                  <p className="text-2xl font-semibold text-devfest-blue">{tier.priceLabel}</p>
                )}
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-devfest-green"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[200px]">Beneficio</TableHead>
                {sponsorTiers.map((tier) => (
                  <TableHead key={tier.id} className="text-center">
                    {tier.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliverableMatrix.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.label}</TableCell>
                  {sponsorTiers.map((tier) => (
                    <TableCell key={tier.id} className="text-center">
                      <CellValue value={row.tiers[tier.id] ?? false} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </Section>
  )
}
