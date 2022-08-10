function Input({label, placeholdername="Enter details", value, callback}){
return (
    <>
    <div style={{textAlign: "left"}}>
     <label className="inputLabels">{label}</label>
    <br />
    <input placeholder={placeholdername} className="inputFields" value={value} onChange={(e)=>callback(e)} />
    </div>
    </>
)
}

export default Input