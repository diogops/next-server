const Formularios = () => {
    return (
        <div className="container col-6 mb-4 border p-3">
            <h2>Cadastro</h2>
            <form className="row g-3">
                <div className="col-md-8">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Digite o email" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="text" className="form-control" id="password" placeholder="Digite a senha" />
                </div>
            </form>
        </div>
    );
}

export default Formularios;