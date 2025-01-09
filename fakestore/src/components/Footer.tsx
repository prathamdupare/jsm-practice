import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <p className="text-sm text-muted-foreground">
              We offer the best products at competitive prices. Shop with
              confidence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Shipping Information
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <p>Email: support@store.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Store Street</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
