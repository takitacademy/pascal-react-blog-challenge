import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header-brand">
                <h3>AL</h3>
            </div>
            <div className="header-items">
                <ul className="headerItemsList">
                    <li className="headerListItem">Home</li>
                    <li className="headerListItem">Blog</li>
                    <li className="headerListItem">Bookmarks</li>
                    <li className="headerListItem">Elements</li>
                    <li className="headerListItem">Playlists</li>
                </ul>
            </div>
        </div>
    )
}
