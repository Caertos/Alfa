import "./contact.css";

const Contact = () => {
  return (
    <section className="general-container">
      <div className="contact-container">
        <div>
          <h1>¿Necesitas asesoría?</h1>
          <h3>Puedes comunicarte con nosotros o visitarnos...</h3>
          <a className="contact-info" href="#">
            <img src="/mobileIcon.svg" alt="mobileIcon" />
            Teléfono: XXX-XXX-XXXX
          </a>
          <br />
          <a className="contact-info" href="#">
            <img src="/whatsappIcon.gif" alt="whatsappIcon" />
            Whatsapp: XXX-XXX-XXXX
          </a>
          <div className="contact-form">
            <form>
              <input type="text" id="form4Example1" className="form-control" />
              <label className="form-label" htmlFor="form4Example1">
                Nombre
              </label>

              <input type="email" id="form4Example2" className="form-control" />
              <label className="form-label" htmlFor="form4Example2">
                Correo Electrónico
              </label>

              <textarea
                className="form-control"
                id="form4Example3"
                rows="4"
                style={{ resize: "none" }}
              ></textarea>
              <label className="form-label" htmlFor="form4Example3">
                Mensaje
              </label>
              <button data-mdb-ripple-init type="button">
                Envíar
              </button>
            </form>
          </div>
        </div>
        <div className="alfaContactWrapper">
          <img
            src="/alfaContact.webp"
            className="alfaContactImg"
            alt="alfaStoreContact"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
