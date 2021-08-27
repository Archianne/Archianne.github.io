import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdFoVEGpCyLlGGoJjt3abx9VV9y8nyF8sQF2GKvgD37FDfjyQ/formResponse";
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState("");

  const info = [
    {
      label: "Name",
      value: name,
      type: "text",
      entry: "entry.1075402477",
      function: (e) => setName(e.target.value),
    },
    {
      label: "Telephone",
      value: telephone,
      type: "text",
      entry: "entry.1834869235",
      function: (e) => setTelephone(e.target.value),
    },
    {
      label: "Email",
      value: email,
      type: "text",
      entry: "entry.1216695396",
      function: (e) => setEmail(e.target.value),
    },
    {
      label: "Message",
      value: message,
      type: "text",
      entry: "entry.596902828",
      function: (e) => setMessage(e.target.value),
    },
  ];

  const validateName = () => {
    if (name.length === 0) {
      alert("Name can't be blank");
      return false;
    }
    return true;
  };

  const validatePhone = () => {
    if (telephone.length === 0) {
      alert("Phone number can't be blank");
      return false;
    }

    if (!/^-?\d+$/.test(telephone)) {
      alert("Please enter a correct phone number");
      return false;
    }

    return true;
  };

  const validateEmail = () => {
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (email.length === 0) {
      alert("Email can't be blank");
      return false;
    }

    if (!regexEmail.test(email)) {
      alert("Please enter a correct email address");
      return false;
    }

    return true;
  };

  const validateForm = () => {
    if (!validateName() || !validatePhone() || !validateEmail()) {
      setFormSubmitted(
        <p className="form-not-submitted">❌ Form not submitted</p>
      );
      return false;
    } else {
      setFormSubmitted(<p className="form-submitted">✔️ Form submitted</p>);
      return true;
    }
  };

  useEffect(() => {
    if (submitted) {
      setName("");
      setTelephone("");
      setEmail("");
      setMessage("");
      const { msgSent } = setTimeout(() => setFormSubmitted(""), 5000);
      return () => {
        clearTimeout(msgSent);
      };
    } else {
      const { msgSent } = setTimeout(() => setFormSubmitted(""), 5000);
      return () => {
        clearTimeout(msgSent);
      };
    }
  }, [submitted]);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <StyledContact>
        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>

        <form
          action={FORM_ACTION}
          method="post"
          target="hidden_iframe"
          onSubmit={(e) => {
            validateForm();
            if (!validateForm()) {
              e.preventDefault();
            }
          }}
        >
          {info.map((input) => {
            return (
              <div className="input-container">
                <input
                  onChange={input.function}
                  value={input.value}
                  type={input.type}
                  placeholder={input.label}
                  name={input.entry}
                  required
                />
                <label htmlFor={input.value} data-content={input.label}>
                  <span className="hidden">{input.label}</span>
                </label>
              </div>
            );
          })}

          <div>
            <button type="submit">SEND</button>
          </div>
          <div className="submitted-status">{formSubmitted}</div>
        </form>
      </StyledContact>
    </Suspense>
  );
};

export default Contact;

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;

  .input-container {
    margin-bottom: 2rem;
    transition: background-color 0.2s ease;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &:hover,
    &:focus-within {
      background-color: ${(props) => props.theme.bg2};
    }
  }

  .input-container:hover input {
    border-color: ${(props) => props.theme.boxBorder};
  }

  input {
    background: none;
    border-width: 0;
    display: block;
    outline: none;
    padding: 1.8rem 1rem 0.2rem;
    font-size: 12px;
    border-bottom: 0.1rem solid #333;
    transition: border-color 0.2s ease;
    caret-color: ${(props) => props.theme.active};
    width: 100%;
    color: ${(props) => props.theme.fontColor1};
    &::placeholder {
      color: rgba(0, 0, 0, 0);
    }
  }

  /* Auto-complete */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme.fontColor1};
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.bg} inset;
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.bg} inset;
  }

  label {
    display: block;
    position: relative;
    max-height: 0;
    font-weight: 500;
    pointer-events: none;

    &::before {
      color: #555;
      content: attr(data-content);
      display: inline-block;
      filter: blur(0);
      backface-visibility: hidden;
      transform-origin: left top;
      transition: transform 0.2s ease;
      left: 0.2rem;
      bottom: -5px;
      position: relative;
    }

    &::after {
      bottom: 1rem;
      content: "";
      height: 0.1rem;
      position: absolute;
      transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
      opacity: 0;
      left: 0;
      top: 100%;
      margin-top: -0.1rem;
      transform: scale3d(0, 1, 1);
      width: 100%;
      background-color: ${(props) => props.theme.active};
    }
  }

  input:focus + label::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }

  input:placeholder-shown + label::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }

  label::before,
  input:focus + label::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }

  input:focus + label::before {
    color: ${(props) => props.theme.active};
  }

  .hidden {
    border: 0;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  button {
    width: 100%;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.bg},
      5%,
      ${(props) => props.theme.boxBorder} 100%
    );
    background-color: ${(props) => props.theme.boxBorder};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.boxBorder};
    display: inline-block;
    cursor: pointer;
    color: ${(props) => props.theme.fontColor1};
    font-weight: bold;
    padding: 6px 24px;
  }
  button:hover {
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.boxBorder} 5%,
      ${(props) => props.theme.bg} 100%
    );
    background-color: #e9e9e9;
  }

  .submitted-status {
    margin-top: 20px;

    p {
      text-align: center;
      padding: 10px 20px;
    }

    .form-submitted {
      background-color: ${(props) => props.theme.bg2};
      color: green;
      border: 1px solid green;
    }

    .form-not-submitted {
      background-color: ${(props) => props.theme.bg2};
      color: red;
      border: 1px solid red;
    }
  }
`;
