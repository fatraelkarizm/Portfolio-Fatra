// sections/Footer.jsx

const Footer = () => {
  return (
    <footer className="text-white p-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fatra Al Khawarizmi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;