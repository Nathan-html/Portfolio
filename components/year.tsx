import {NextComponentType} from "next";

const Year: NextComponentType = ({props}: any) => {
    return <>
        <h3>{props.year}</h3>
        <p>{props.state}</p>
        <p>{props.title}</p>
        <p>{props.desc}</p>
        <p>{props.place}</p>
    </>
}

export default Year;
