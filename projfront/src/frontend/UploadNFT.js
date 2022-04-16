import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Button from "./Button";

const UploadNFT = () =>{
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container" id="details">
        <h2 className="text-center py-5">Upload NFT</h2>
         <form>
         <div className="mb-3">
        <label for="title" className="form-label">Upload NFT</label>
        <input type="file" className="form-control" id="title" />
        
    </div>
    <div className="mb-3">
        <label for="title" className="form-label">NFT Title</label>
        <input type="text" className="form-control" id="title" />
        
    </div>
    
    <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Description</label>
        <textarea type="text" className="form-control" rows="6"/>
    </div>
    <div className="mb-3">
        <label for="title" className="form-label">Price</label>
        <input type="number" className="form-control" id="title"/>
        
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default UploadNFT;