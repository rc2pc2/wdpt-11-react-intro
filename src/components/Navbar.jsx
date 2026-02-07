const Navbar = () => {
    const links = [
        { id: 1, text: 'Home', url: '#', current: false },
        { id: 2, text: 'Prodotti', url: '#', current: true },
        { id: 3, text: 'Chi Siamo', url: '#', current: false },
        { id: 4, text: 'Contatti', url: '#', current: false },
        { id: 5, text: 'Blog', url: '#', current: false },
    ];

    const qualcosa = (false) ? 2 : 1; // (condizione) ? (valoreVero) : (valoreFalso) 

    const linksList = links.map(link => {
        return (
            <li key={link.id}>
                <a href={link.url} className={link.current ? 'active' : ''}>
                    {link.text}
                </a>
            </li>
        )
    });

    return (
        <nav id="top-navbar">
            <ul>
                {linksList}
            </ul>
        </nav>
    )

}

export default Navbar