import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full h-[80%] flex items-center py-12 md:py-18 lg:py-22 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="rounded-full" variant="secondary">
              New Features
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              The platform for modern teams
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Empower your team with the tools they need to do their best work.
              Simple, powerful, and designed for the way your team works.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
