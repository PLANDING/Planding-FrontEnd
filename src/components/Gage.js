import "../stylesheets/gage.css";
const Gage=({gage})=>{
    return(<div className="gage">
        <div style={{"width":gage+"%"}}></div>
    </div>)
}
export default Gage;