import sptechLogo from "@/assets/sptech-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={sptechLogo} alt="SPTech Studios" className="h-10 w-auto" />
          <div className="text-sm text-muted-foreground">
            © 2025 SPTech Studios. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
