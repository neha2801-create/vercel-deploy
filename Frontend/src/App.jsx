import { useState } from "react";
import viteLogo from "/vite.svg";
import "../public/frontend.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [email, setEmail] = useState("");
  const [isAccount, setAccount] = useState(false);
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const toogle = () =>{
    setAccount(!isAccount);
  }

  const handlePasswordChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Note Canvas <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                Paint your ideas in notes
              </span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              "Unleash your creativity and organization with our digital note keeper! 
              Whether you're jotting down ideas, crafting to-do lists, or curating collections of inspiration, 
              our intuitive platform empowers you to capture and organize 
              your thoughts seamlessly. 
              Say goodbye to scattered notes and hello to a world of
              limitless possibilities. Start writing your story today."
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                {isAccount == false ? (
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="form-link d-flex justify-content-center mb-4">
                      <a 
                        className="form-link curssor-cusotm"
                        htmlFor="form2Example33"
                        onClick={toogle}
                      >
                        Already have account?
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100" 
                    >
                      Sign up
                    </button>
                  </form>
                ) : (
                  <form>
                    
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="form-link d-flex justify-content-center mb-4">
                      <a
                        className="form-link curssor-cusotm"
                        htmlFor="form2Example33"
                        onClick={toogle}
                      >
                        Create a account
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100"
                    >
                      Login
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
