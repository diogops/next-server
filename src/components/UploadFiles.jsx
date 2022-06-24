import { useState } from "react"
import axios from 'axios'

const UploadFiles = () => {
    const [data, setData] = useState({})

    function handleFile(e) {
        console.log("Arquivo: ", e.target?.files[0])
        setData({ ...data, file: e.target?.files[0] })
    }

    function handleEnviar(e) {
        e.preventDefault()
        console.log("Dados: ", data)
        let formData = new FormData()
        formData.append('file', data.file)
        formData.append('descricao', data.descricao)

        axios({
            url: '/some/api',
            method: 'POST',
            headers: {
                authorization: 'token',
                accept: '*'
            },
            data: formData
        })
            .then(res => {
                console.log("Registro enviado: ", res)
            })
    }

    return (
        <div className="col-12 p-1">
            <div className="container col-12 mb-4 border p-2">
                <h2 className="text-center mb-5">Upload de Arquivos</h2>
                <div className="row g-2">
                    <div className="col-md-12">
                        <label htmlFor="descricao" className="form-label">Descrição</label>
                        <input type="text" className="form-control" id="descricao" onChange={(e) => setData({ ...data, descricao: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                        {/* <label htmlFor="file" className="form-label">Escolha o arquivo:</label> */}
                        <input type="file" name="file" className="form-file ml-5" id="file" onChange={handleFile} />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={handleEnviar}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadFiles;