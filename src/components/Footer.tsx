const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-sm tracking-tight">
            Digital Support Systems
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digital Support Systems, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
