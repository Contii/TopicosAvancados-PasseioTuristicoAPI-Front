
import axios from "axios";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../AppConsts";

const URL = `${API_URL}/users`;

export default function UserForm() {
  const nav = useNavigate();

  const [submitting, setSubmitting] = useState(false);

  const formReducer = (state, event) => {
    if (event.reset) {
      return {
        first_name: '',
        last_name: '',
        email: ''
      }
    }

    return {
      ...state,
      [event.name]: event.value
    }
  }

  const [formData, setFormData] = useReducer(formReducer, {
    first_name: '',
    last_name: '',
    email: ''
  });


  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  const handleSave = event => {
    console.log(event);
    console.log(formData)
    event.preventDefault();

    setSubmitting(true);


    axios.post(URL, formData)
      .then((res) => {
        console.log(res);

        setFormData({
          reset: true
        });

        alert("Sucesso ao salvar!");
      })
      .catch(err => {
        console.log(err);
        alert("Falha ao salvar!");
      }).finally(() => {
        setSubmitting(false);
      });

    /*
  setTimeout(() => {
    setSubmitting(false);

    setFormData({
      reset: true
    });

  }, 3000)
  */
  };

  return (
    <>
      <h2>Usuário</h2>
      <p>Formulário desenvolvido em React, que submete os dados para a API https://reqres.in.</p>

      <form onSubmit={handleSave}>
        <fieldset className="form-group" disabled={submitting}>
          <label>Primeiro nome</label>
          <input type="text" name="first_name" className="form-control" placeholder="Fulano" onChange={handleChange} value={formData.first_name || ''} />
        </fieldset>

        <fieldset className="form-group" disabled={submitting}>
          <label>Sobrenome</label>
          <input type="text" name="last_name" className="form-control" placeholder="de Tal" onChange={handleChange} value={formData.last_name || ''} />
        </fieldset>

        <fieldset className="form-group" disabled={submitting}>
          <label>E-mail</label>
          <input type="email" name="email" className="form-control" placeholder="name@example.com" onChange={handleChange} value={formData.email || ''} />
        </fieldset>

        <div className="mt-2">
          <button type="submit" className="btn btn-success me-1" style={{ minWidth: '100px' }} disabled={submitting}>
            <i className="fas fa-check-circle"></i> Salvar
          </button>

          <button className="btn btn-light" style={{ minWidth: '100px' }} onClick={() => nav('/user')} disabled={submitting}>
            <i className="fas fa-times-circle"></i> Cancelar
          </button>
        </div>
      </form>
    </ >
  );
}