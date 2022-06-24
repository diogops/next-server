const MaskForm = () => {
    return (
        <div className="col-12 p-1">
            <div className="container col-12 mb-4 border p-2">
                <h2 className="text-center mb-5">Formulário com máscaras</h2>
                <div className="row g-3">
                    <div className="form-group">
                        <input type="text" className="form-control item" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MaskForm;