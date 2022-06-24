const CheckBox = () => {
    return (
        <div className="mb-4">
            <h2>Escolha suas configurações</h2>
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="flex-switch" />
                <label htmlFor="flex-switch" className="form-check-label">Deseja receber notificações?</label>
            </div>
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="flex-switch-disabled" disabled/>
                <label htmlFor="flex-switch-disabled" className="form-check-label">Deseja receber notificações?</label>
            </div>
        </div>
    );
}

export default CheckBox;