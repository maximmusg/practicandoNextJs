import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Pagina no encontrada</p>
      <Link href="/">Volver</Link>
    </>
  );
};

export default NotFound;
