function ContactPage() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <form className="col-md-6 mx-auto shadow p-4 rounded brand-pink">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Send Message
        </button>
      </form>
    </div>
  );
}
export default ContactPage;
