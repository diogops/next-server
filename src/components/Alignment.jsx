const Alignment = () => {
    return (
        <>
            <h1 className="text-center">
                Hello, World!
            </h1>
            <div className="container">
                <div className="small-box dark-box mx-auto text-center">Small Box/Dark Box</div>
            </div>
            <div>
                <div>Box #1</div>
                <div>Box #2</div>
            </div>
            <div className="grid container square-box">
                <div className="row ">
                    <div className="col-12">Box #1</div>
                </div>
                <div className="row ">
                    <div className="col-12">Box #2</div>
                </div>
                <div className="row ">
                    <div className="col-12">Box #3</div>
                </div>
            </div>
            <div className="row borders">
                <div className="col-xs-5 col-md-2">Email</div>
                <div className="col-xs-7 col-md-4">my@email.com</div>
                <div className="col-xs-5 col-md-2">Phone</div>
                <div className="col-xs-7 col-md-4">555-123-4567</div>
            </div>

            <div className="grid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 bg-success">Under me should be a DIV</div>
                    <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12 bg-danger">Under me should be a DIV</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 bg-warning">I am the last DIV</div>
                </div>
            </div>
        </>
    );
}

export default Alignment;