import React, { useState } from "react";
import "./input.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const SignUp = ({ content, wrongPassword }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    name: "",
    password: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle actual form submission here (e.g., fetch/axios)
  };

  React.useEffect(() => {
    if (wrongPassword) {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-right",
        timeOut: "3000",
      };
      toastr.error(wrongPassword);
    }
  }, [wrongPassword]);

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="form min-h-[60vh] w-[50vh] p-10 text-white flex flex-col justify-center items-center">
        <h1 className="text-blue-450 rounded-lg px-16 py-2 text-4xl mb-4 mt-3 font-semibold">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-9 justify-center items-center"
        >
          <p className="text-red-600">{content}</p>

          {[
            { name: "firstName", label: "First Name" },
            { name: "lastName", label: "Last Name" },
            { name: "name", label: "Username" },
            { name: "password", label: "Set Password", type: "password" },
            { name: "location", label: "Location" },
          ].map((field) => (
            <div className="input-container" key={field.name}>
              <input
                type={field.type || "text"}
                name={field.name}
                required
                className="border-[1px] px-4 rounded-lg bg-transparent input p-1"
                value={formData[field.name]}
                onChange={handleChange}
              />
              <label
                htmlFor={field.name}
                className="mt-4 label font-semibold text-2xl"
              >
                {field.label}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="text-white rounded-lg bg-blue-900 hover:bg-blue-950 px-10 py-1 mx-auto font-semibold"
          >
            Sign Up
          </button>
        </form>
        <a href="/login" className="underline mt-8">
          Already have an Account?
        </a>
      </div>
    </div>
  );
};

export default SignUp;

/* CSS styles from the original are assumed to be in input.css */
