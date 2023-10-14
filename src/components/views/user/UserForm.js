export default function UserForm() {
    return (
        <>
            <div>
                <h2>Usuário</h2>
            </div>

            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" className="form-control" id="name" placeholder="Nome do usuário" />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="E-mail do usuário" />
            </div>

            <div className="form-group">
               <label htmlFor="password">Senha</label>
                <input type="password" className="form-control" id="password" placeholder="Senha do usuário" />
            </div>
            
            <button type="submit" className="btn btn-primary">Salvar</button>
        </>
    );
}