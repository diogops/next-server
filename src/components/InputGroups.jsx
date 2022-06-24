const InputGroups = () => {
    return (
        <>
            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon">@</span>
                <input type="email" className="form-control" placeholder="Digite o seu email" />
            </div>

            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon2">abc...</span>
                <input type="text" className="form-control" placeholder="Digite o nome do usuário" />
            </div>

            <p>Quanto você quer depositar?</p>
            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon3">R$</span>
                <input type="text" className="form-control" placeholder="Valor" />
                <span className="input-group-text" >.00</span>
            </div>
        </>
    );
}

export default InputGroups;