import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import Logo from "../../assets/Images/image_prev_ui.png";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { Container, Row } from "react-bootstrap";


const Contact = () => {
  // State variables to store input values and validation status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [loading, setLoading] = useState({
    submit: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profession: "",
    linkedInProfile: "",
    companyName: "",
    hearAboutUs: "",
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, submit: true });
    try {
      // Validate all fields before submitting the form
      if (!validateForm()) {
        setLoading({ ...loading, submit: false });
        return;
      }

      // Send POST request to /contact route with input details
      await axios.post("http://localhost:5000/contact", {
        name,
        email,
        phoneNumber,
        profession,
        linkedInProfile,
        companyName,
        hearAboutUs,
      });
      // Reset input fields after successful submission
      resetForm();
      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Form submitted successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.error("Error:", error);
      // Show error alert if submission fails
      Swal.fire({
        icon: "error",
        title: "Form submission failed.",
        text: "Please try again later.",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setLoading({ ...loading, submit: false }); // Hide spinner after submission attempt
    }
  };

  // Function to validate all form fields
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Name validation
    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Phone number validation
    // Phone number validation
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      if (!/^\d+$/.test(phoneNumber)) {
        newErrors.phoneNumber = "Please enter numbers only";
      } else {
        newErrors.phoneNumber = "Please enter 10 digits";
      }
      valid = false;
    }

    // Profession validation
    if (!profession) {
      newErrors.profession = "Profession is required";
      valid = false;
    }

    // LinkedIn profile validation
    if (!linkedInProfile) {
      newErrors.linkedInProfile = "LinkedIn profile is required";
      valid = false;
    }

    // Company name validation
    if (!companyName) {
      newErrors.companyName = "Company name is required";
      valid = false;
    }

    // How heard validation
    if (!hearAboutUs) {
      newErrors.hearAboutUs = "Please tell us how you heard about us";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Function to reset form fields
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setProfession("");
    setLinkedInProfile("");
    setCompanyName("");
    setHearAboutUs("");
    setErrors({
      name: "",
      email: "",
      phoneNumber: "",
      profession: "",
      linkedInProfile: "",
      companyName: "",
      hearAboutUs: "",
    });
  };

  return (
    <div className="contact">
      <Container fluid>
      <div className="logo">
        <img
          
          src={Logo}
          alt=""
        />
      </div>
      </Container>
      
      <div className="row d-lg-flex d-sm-block" >
        <div className=" col-lg-7 col-sm-12  d-flex flex-column justify-content-center vh-100 " >
          <div className="title " >
            <h1>
              Introducing The{" "}
              <span >
                Krut AI
              </span>
            </h1>
            <p >
            We supercharge creators of all levels with an AI powered creative suite tailored for them.
            </p>
            <h2 className="title-2" 
             
            >
              Website
            </h2>
            <h2
            >
              Coming <span style={{ color: "#01DDE9" }}>Soon!</span>
            </h2>
            <div className="date">
            <p 
              >
                21<sup>th</sup> April 2024
              </p>
            </div>
              
            
            <div className="social-media-icons d-flex col-lg-1 mt-5 gap-3  ">
              <a href="https://discord.com/invite/BmaRqVPD">
                {" "}
                <FaDiscord className="icon hide-on-mobile" />{" "}
              </a>
              <a href="https://x.com/krutAI_?t=jXEsIN-SWtldK_oak7WyZQ&s=09">
                {" "}
                <FaXTwitter className="icon hide-on-mobile" />{" "}
              </a>
              <a href="https://www.linkedin.com/company/krut-ai/">
                {" "}
                <FaLinkedin className="icon hide-on-mobile" />{" "}
              </a>
              
            </div>
          </div>
          
        </div>
        <div className="col-lg-5 col-sm-12" >
          <div className="form d-flex flex-column justify-content-center align-items-center vh-100 " >
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <input 
                    type="text"
                    className="form-control custom-input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control custom-input"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {errors.phoneNumber && (
                    <span className="text-danger">{errors.phoneNumber}</span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                  {errors.profession && (
                    <span className="text-danger">{errors.profession}</span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="LinkedIn Profile"
                    value={linkedInProfile}
                    onChange={(e) => setLinkedInProfile(e.target.value)}
                  />
                  {errors.linkedInProfile && (
                    <span className="text-danger">
                      {errors.linkedInProfile}
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Company Name(if Any)"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  {errors.companyName && (
                    <span className="text-danger">{errors.companyName}</span>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="How did you hear about us"
                    value={hearAboutUs}
                    onChange={(e) => setHearAboutUs(e.target.value)}
                  />
                  {errors.hearAboutUs && (
                    <span className="text-danger">{errors.hearAboutUs}</span>
                  )}
                </div>

                <div className="text-center">
                  {loading.submit ? (
                    <button  className="button-getdemo">
                    <ClipLoader
                      size={20}
                      color="white"
                      loading={loading.submit}
                    />
                    </button>
                  ) : (
                    <button type="submit" className="button-getdemo pb-2 pt-2">
                      Book a Demo
                    </button>
                  )}
                </div>
              </form>
              <div className="social-media-icons-mb d-flex col-lg-1 mt-5 gap-3  ">
              <a href="https://discord.com/invite/BmaRqVPD">
                {" "}
                <FaDiscord className="icon hide-on-lg" />{" "}
              </a>
              <a href="https://x.com/krutAI_?t=jXEsIN-SWtldK_oak7WyZQ&s=09">
                {" "}
                <FaXTwitter className="icon hide-on-lg" />{" "}
              </a>
              <a href="https://www.linkedin.com/company/krut-ai/">
                {" "}
                <FaLinkedin className="icon hide-on-lg" />{" "}
              </a>
              
            </div>
            </div>
           
    </div>
          </div>
          
        </div>
      </div>
    
  );
};

export default Contact;
