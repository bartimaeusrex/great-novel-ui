import fetchNovels from '../actions/novels'

export const filteredNovels = (list, term) => list.filter(novel => (
  novel.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveNovels = async () => {
  const novels = await fetchNovels()

  return novels
}
