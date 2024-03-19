export default function Social(props) {
    return (
        <img 
            style={{
                width: props.size + "em", 
                height: props.size + "em",
                cursor: "pointer"
            }} 
            className="social-image" 
            src={props.image}
            onClick={() => {window.location.href = props.url}}></img>
    )
}