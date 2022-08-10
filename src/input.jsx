function Input({label, placeholdername, value, callback}){
return (
    <>
    <div style={{textAlign: "left"}}>
     <label className="inputLabels">{label}</label>
    <br />
    <input placeholder={placeholdername} className="inputFields" value={value} onChange={callback} />
    </div>
    </>
)
}

export default Input