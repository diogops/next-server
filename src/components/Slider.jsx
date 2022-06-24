const Slider = () => {
    return (
        <div>
            <span>Filter by price interval: <b>€ 10</b> </span>
            <input id="ex2" type="text" className="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]" /> <b>€ 1000</b>
        </div>
    );
}

export default Slider;