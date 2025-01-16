import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-primary"
                  href="#"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 FoCDoT  All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              className="text-sm text-muted-foreground hover:text-primary"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-primary"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-primary"
              href="#"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
