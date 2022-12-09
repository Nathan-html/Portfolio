import {useEffect, useRef} from "react";

export default function Cursor () {
    // Your CSS as text
    let styles = `
        * {
            cursor: none;
        }
        
        .cursor {
            z-index: 100;
            position: absolute;
            top: 0;
            left: 0;
            /* border: 2px solid white; */
            /* background-color: rgba(255, 255, 255, 0.356); */
            height: 30px;
            width: 30px;
            border-radius: 50px;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }
        .cursor::after,
        .cursor::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #000000;
            height: 10px;
            width: 10px;
            border-radius: 50px;
        }
        .cursor::before {
            background-color: rgb(0, 0, 0);
        }
        .cursor.click::before {
            animation: click 1s ease forwards;
            background-color: rgb(0, 0, 0);
        }
        @keyframes click {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(7);
            }
        }
    `

    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
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