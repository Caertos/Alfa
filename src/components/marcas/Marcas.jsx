import "./marcas.css";

const Marcas = () => {
  return (
    <>
      <div className="marcas">
        <h2 className="marcas-title">TUS MARCAS FAVORITAS</h2>
        <div className="marcas-container">
          <img src="/marcas/samsung.png" alt="" />
          <img src="/marcas/apple.svg" alt="" />
          <img src="/marcas/xiaomi.png" alt="" />
          <img src="/marcas/lg.png" alt="" />
          <img src="/marcas/oppo.png" alt="" />
          <img src="/marcas/motorola.png" alt="" />
          <img src="/marcas/vivo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Marcas;
