import type { NewsView } from '../../cases/news/dtos/news-view'

type NewsViewSwitcherProps = {
  view: NewsView
  onViewChange: (view: NewsView) => void
}

export function NewsViewSwitcher({ view, onViewChange }: NewsViewSwitcherProps) {
  return (
    <div className="view-switcher" role="group" aria-label="Visualização das notícias">
      <button type="button" aria-pressed={view === 'grid'} onClick={() => onViewChange('grid')}>
        Grade
      </button>
      <button type="button" aria-pressed={view === 'list'} onClick={() => onViewChange('list')}>
        Lista
      </button>
    </div>
  )
}
