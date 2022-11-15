import {NextComponentType} from "next";

// @ts-ignore
const Year: NextComponentType = (
    year: String = '',
    state: String = '',
    title: String = '',
    desc: String = '',
    place: String = ''
) => {
    return <>
        <h3>{year}</h3>
        <p>{state}</p>
        <p>{title}</p>
        <p>{desc}</p>
        <p>{place}</p>
    </>
}

export default Year;
