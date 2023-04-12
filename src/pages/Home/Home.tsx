import FilterButtonGroup from 'components/FilterButton/FilterButtonGroup'
import Header from 'components/Header'
import MainBanner from 'components/MainBanner'

export default function Home() {
  const listFilterItem = [
    {
      id: 1,
      icon: 'knift',
      title: 'Morning'
    },
    {
      id: 2,
      icon: 'knift',
      title: 'Lunch'
    },
    {
      id: 3,

      icon: 'knift',
      title: 'Dinner'
    },
    {
      id: 4,
      icon: 'cup',
      title: 'Snack'
    }
  ]
  return (
    <>
      <Header />
      <MainBanner />
      <FilterButtonGroup list={listFilterItem} />
    </>
  )
}
