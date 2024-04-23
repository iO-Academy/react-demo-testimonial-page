const Testimonial = ({image, name, verified, testimony}) => {
    return (
        <div className='bg-purple-800 rounded m-6 p-6'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span>{(verified) && 'Verified Buyer'}</span>
            <p>{testimony}</p>
        </div>
    )
}

export default Testimonial
