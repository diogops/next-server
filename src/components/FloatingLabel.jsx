const FloatingLabel = () => {
    function handle(e) {
        e.preventDefault()
    }

    return (
        <>
            <h2>Faça login para continuar</h2>
            <div className="form-floating mb-3" >
                <input type="email" className="form-control" id="email" autoFocus={true} />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3" >
                <input type="password" className="form-control" id="password" />
                <label htmlFor="password">Senha</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="nome" />
                <label htmlFor="nome">Nome</label>
            </div>
            <input type="submit" value="Entrar" className="btn btn-primary" onClick={handle} />
        </>
    );
}

export default FloatingLabel;