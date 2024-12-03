import { useEffect, useState } from "react"

export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    }, [isDarkMode])

    return (
        <header className="flex-centered">
            <h1>
                TIC-TAC-TOE REACT
            </h1>
            <div className="column">
                <span>{isDarkMode ? "dark-mode".toUpperCase() : "light-mode".toUpperCase()}</span>
                <button onClick={() => setIsDarkMode((darkMode) => !darkMode)} >
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </button>
            </div>
        </header>
    )
}