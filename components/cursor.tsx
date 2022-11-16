import {useEffect, useRef} from "react";

export default function Cursor () {
    const cursorRef = useRef(null);
    useEffect(() => {
        if (cursorRef.current == null) return;
        document.addEventListener('mousemove', (e: MouseEvent) => {
            if (cursorRef.current == null) return;
            // @ts-ignore
            cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
        });
        window.addEventListener("scroll", (e: Event) => {
            if (cursorRef.current == null) return;
            // @ts-ignore
            const fromTop = cursorRef.current.getAttribute("data-fromTop");
            // @ts-ignore
            cursorRef.current.style.top = scrollY + parseInt(fromTop) + "px";
        });
        document.addEventListener('click', () => {
            if (cursorRef.current == null) return;
            // @ts-ignore
            cursorRef.current.classList.add("expand");
            setTimeout(() => {
                if (cursorRef.current == null)
                    return;
                // @ts-ignore
                cursorRef.current.classList.remove("expand");
            }, 500)
        })
    }, [])
    return (
        <div className="cursor" ref={cursorRef}>
        </div>
    )
}