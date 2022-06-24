const estados = [
    { sigla: "AM", descricao: "Amazonas" },
    { sigla: "MA", descricao: "Maranhão" },
    { sigla: "SP", descricao: "São Paulo" },
    { sigla: "MG", descricao: "Minas Gerais" },
    { sigla: "MT", descricao: "Mato Grosso" },
    { sigla: "GO", descricao: "Goiás" },
    { sigla: "MS", descricao: "Mato Grosso do Sul" },
]
const Forms = () => {
    return (
        <div className="container col-4 mb-4 border p-2">
            <h2 className="text-center mb-5">Cadastro de Pessoas</h2>
            <div className="row g-2">
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" autoFocus={true} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <div className="col-md-4">
                    <label htmlFor="cep" className="form-label">CEP:</label>
                    <input type="text" className="form-control" id="cep" />
                </div>

                <div className="col-md-10">
                    <label htmlFor="rua" className="form-label">Rua:</label>
                    <input type="text" className="form-control" id="rua" />
                </div>

                <div className="col-md-2">
                    <label htmlFor="numero" className="form-label">Numero:</label>
                    <input type="text" className="form-control" id="numero" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="cidade" className="form-label">Cidade:</label>
                    <input type="text" className="form-control" id="cidade" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="estado" className="form-label">Estado:</label>
                    <select name="estado" id="estado" className="form-select">
                        <option selected>Escolha um Estado</option>
                        {estados.map(estado => <option key={estado.sigla} value={estado.sigla}>{estado.descricao}</option>)}
                    </select>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="newsletter" />
                        <label htmlFor="newsletter" className="form-check-label">Receber novidades?</label>
                    </div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={(e) => e.preventDefault}>Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Forms;