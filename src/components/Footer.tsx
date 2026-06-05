const Footer = () => {
  return (
    <footer className="section-beige py-8 pb-36 md:pb-8 border-t border-border">
      <div className="container">
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary mb-2">NutriBebê</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Introdução alimentar segura e tranquila para o seu bebê
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NutriBebê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
