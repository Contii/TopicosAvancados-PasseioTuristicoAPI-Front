import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../../AppConsts";

/**
 * Componente de paginação dos dados
 * @param {*} param0
 * @returns
 */
const Pagination = ({ pages, changeActivePage, changePerPage, activePage }) => {
  const listItems = [];

  for (let i = 0; i < pages; i++)
    listItems.push(
      <li className={ 'page-item ' + (activePage === i+1 ? 'active' : '')} key={i}>
        <a className="page-link" onClick={() => changeActivePage(i + 1)} >{i + 1}</a>
      </li>
    );

  const perPage = [5, 10, 15].map(e => (
    <option key={e} value={e}>{e}</option>
  ));

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {listItems}

        <li>
          <select className="form-select ms-2" onChange={changePerPage}>
            {perPage}
          </select>
        </li>
      </ul>
    </nav>);
}

export default function UserList() {
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [data, setData] = useState({} | []);
  const nav = useNavigate(); // Navegação
  //let { data } = useFetch('https://reqres.in/api/users');


  /*
    Effect que faz a invocação da API para receber os dados dos usuários
    em formato JSON.

    O effect obserta a alteração de estado de 'activePage' e 'perPage'.
  */
  useEffect(() => {
    fetch(`${API_URL}/users?page=${activePage}&per_page=${perPage}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [activePage, perPage]);


  function changeActivePage(page = 1) {
    setActivePage(page);
  }

  function changePerPage(event) {
    setPerPage(event.target.value);
  }

  // Gera uma lista de linhas para mostrar na tabela de usuários
  const userItems = data.data?.map(item => (
    <tr key={item.id}>
      <td><img className='avatar' src={item.avatar} alt={item.fisrt_name} /></td>
      <td>{item.first_name} {item.last_name}</td>
      <td>{item.email}</td>
    </tr>
  ));

  return (
    <>
      <h2>
        Usuários
        <button className="btn btn-primary ms-2" onClick={() => nav('/user/new')}>
          <i className="fas fa-plus-circle"></i> New
        </button>
      </h2>
      <p>Lista de usuários obtidos a partir da API https://reqres.in.</p>

      <table className='table table-striped'>
        <thead>
          <tr><th></th><th>Nome</th><th>E-mail</th></tr>
        </thead>
        <tbody>
          {userItems}
        </tbody>
      </table>

      <Pagination pages={data.total_pages}
        changeActivePage={changeActivePage}
        changePerPage={changePerPage}
        activePage={activePage} />
    </>
  );
}