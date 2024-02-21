import Link from 'next/link'

const CarNotFound = () => {
  return (
    <div className="w-full">
      <h1>Oops! Car not found</h1>
      <p>Sorry, we couldn&apost find the car you were looking for.</p>
      <Link
        href="/"
        className="bg-[rgb(235,224,74)] text-xs text-center px-8 py-2 w-fit block hover:underline mx-auto"
      >
        Go back to the car list
      </Link>
    </div>
  )
}

export default CarNotFound
