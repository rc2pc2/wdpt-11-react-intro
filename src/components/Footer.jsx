const footerSections = [
    {
        id: 222,
        title: "Pastificio",
        links: [
            { label: "Il Pastificio", href: "#" },
            { label: "Grano", href: "#" },
            { label: "Filiera", href: "#" },
            { label: "100 anni di pasta", href: "#" },
            { label: "Sartoria della pasta", href: "#" },
        ],
    },
    {
        id: 5123,
        title: "Prodotti",
        links: [
            { label: "Le classiche", href: "#" },
            { label: "Le Integrali", href: "#" },
            { label: "Le Speciali", href: "#" },
            { label: "Le Biologiche", href: "#" },
            { label: "Le Gluten-free", href: "#" },
        ],
    },
];


export default function Footer() {
    return (
        <footer className="container">
            <nav className="footer-nav">
                <div className="footer-col">
                    <figure>
                        <img src="/logo.png" alt="La Molisana" />
                    </figure>
                </div>
                {footerSections.map((section) => (
                    <div className="footer-col" key={section.id}>
                        <div>
                            <h4>{section.title}</h4>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.href}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </nav>
        </footer>
    );
}
