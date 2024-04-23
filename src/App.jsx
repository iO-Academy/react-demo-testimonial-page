import './App.css'
import MainHeadline from './components/MainHeadline'
import StarRating from './components/StarRating'
import Testimonial from './components/Testimonial'

function App() {
  const testimonials = [
    {image: './assets/react.svg', name: 'Colton Smith', verified: true, testimony: 'We needed the same printed design as'},
    {image: './assets/react.svg', name: 'Colton Smith', verified: true, testimony: 'We needed the same printed design as'},
    {image: './assets/react.svg', name: 'Colton Smith', verified: true, testimony: 'We needed the same printed design as'}
  ]

  return (
    <>
      <div className="flex">
        <MainHeadline />
        <div>
          <StarRating stars={5} category='Reviews' />
          <StarRating stars={4} category='Report Guru' />
          <StarRating stars={2} category='BestTech' />
        </div>
      </div>

      <div className="flex">
        {
          testimonials.map((item, index) => {
            return <Testimonial key={index} image={item.image} name={item.name} verified={item.verified} testimony={item.testimony} />
          })
        }
      </div>
    </>
  )
}

export default App
