

const Heading = ({ Heading = 'Welcome To PopX' }) => {
    return (
        <>
            <h1 className='font-bold text-2xl'>{Heading}</h1>
            <p className=' text-md text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </>
    )
}

export default Heading