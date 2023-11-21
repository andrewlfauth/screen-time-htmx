import ALL_SHOWS from '../shows.json'

export function filterShowsByCategoryAndAge(
  selectedFocuses: string[],
  selectedAges: string[]
) {
  let filteredShows = ALL_SHOWS.filter((show) => {
    return (
      selectedFocuses.length === 0 ||
      selectedFocuses.every((category) => show.focuses.includes(category))
    )
  })

  if (selectedAges.length > 0) {
    filteredShows = filteredShows.filter((show) => {
      return selectedAges.every((age) => show.ages.includes(parseInt(age)))
    })
  }

  return filteredShows
}
