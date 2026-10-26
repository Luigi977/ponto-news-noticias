import type { category } from '../../data/categories'

type NavigationBarProps = {
  categories: category[]
  activeCategory: string
  onSelectCategory: (alias: string) => void
  sort: string
  onSort: (value: string) => void
}

export function NavigationBar({ categories, activeCategory, onSelectCategory, sort, onSort }: NavigationBarProps) {
  return (
    <aside className="filters panel" aria-label="Filtros de notícias">
      <nav aria-labelledby="filter-title">
        <h2 id="filter-title">Filtrar por categoria</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.alias}>
              <button className={category.alias === activeCategory ? 'active' : ''} type="button" aria-pressed={category.alias === activeCategory} onClick={() => onSelectCategory(category.alias)}>{category.label}</button>
            </li>
          ))}
        </ul>
      </nav>
      <label htmlFor="news-sort">Ordenar por</label>
      <select id="news-sort" value={sort} onChange={(event) => onSort(event.target.value)}>
        <option value="recentes">Mais recentes</option>
        <option value="antigas">Mais antigas</option>
        <option value="lidas">Mais lidas</option>
      </select>
    </aside>
  )
}
