const Range = () => {
    return (
        <div className="mb-4">
            <h2>Por favor responda:</h2>
            <label htmlFor="probabilidade" className="form-label">Qual a probabilidade de você indicar esse site?</label>
            <input type="range" className="form-range" min="0" max="5" id="probabilidade" />
        </div>
    );
}

export default Range;