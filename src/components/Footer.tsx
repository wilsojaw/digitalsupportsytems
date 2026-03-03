import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold text-sm">
              Digital Support Systems, Inc.
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digital Support Systems, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
