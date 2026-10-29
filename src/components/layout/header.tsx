type HeaderProps = { search: string; onSearch: (value: string) => void }

export function Header({ search, onSearch }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="./" aria-label="PontoNews — início"><span>Ponto</span>News</a>
      <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
        <input id="news-search" type="search" placeholder="Buscar notícias..." aria-label="Buscar notícias" value={search} onChange={(event) => onSearch(event.target.value)} />
        <button className="icon-button" type="submit" aria-label="Buscar" onClick={() => document.getElementById('news-search')?.focus()}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /></svg>
        </button>
      </form>
      <span className="icon-button profile-icon" role="img" aria-label="Perfil">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2M8 14h8" /></svg>
      </span>
    </header>
  )
}
