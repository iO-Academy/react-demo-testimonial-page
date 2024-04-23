const StarRating = ({stars, category}) => {
    const totalStars = 5

    const starArray = []
    for (let i = 0; i < totalStars; i++) {
        if (i < stars) {
            starArray.push(<span className='text-yellow-400'>★</span>)
        } else {
            starArray.push(<span className="text-grey-100">★</span>)
        }
    }

    // can only use "expressions" in here
    return (
        <div className="m-6 p-3 bg-purple-200 rounded">
            <div className="">
                {starArray}
            </div>
            <h2>Rated {stars} Stars in {category}</h2>
        </div>
    )
}

export default StarRating
