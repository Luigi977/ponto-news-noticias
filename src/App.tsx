import { useState } from 'react'
import { Header } from './components/layout/header'
import { NavigationBar } from './components/layout/navigationBar'
import { Main } from './components/layout/main'
import { MostRead } from './components/layout/mostRead'
import { categories } from './data/categories'
import { news } from './data/news'

function App() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('recentes')
  const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const visibleNews = news.filter((item) =>
    (activeCategory === 'todos' || item.category === activeCategory) && normalize(item.title).includes(normalize(search)),
  ).sort((a, b) => sort === 'lidas' ? b.views - a.views : sort === 'antigas' ? a.day - b.day : b.day - a.day)

  return (
    <div className="container">
      <Header search={search} onSearch={setSearch} />
      <div className="page-layout">
        <NavigationBar categories={categories} activeCategory={activeCategory}
          onSelectCategory={setActiveCategory} sort={sort} onSort={setSort} />
        <Main news={visibleNews} />
        <MostRead />
      </div>
    </div>
  )
}
export default App
