import { Car } from '@/features/cars/utils'
import Image from 'next/image'
import carImage from './carimage.jpg'
import Link from 'next/link'

const CarCard = ({ vehicle }: { vehicle: Car }) => {
  return (
    <div key={vehicle.id} className="flex gap-4 shadow-sm bg-white flex-col">
      <div className="bg-gray-200 rounded-md w-full">
        <Image src={carImage} alt={vehicle.title} />
      </div>
      <div className="p-4 text-xs md:text-sm w-full flex flex-col gap-4 h-full">
        <h3 className="font-bold text-sm md:text-md">{vehicle.brand}</h3>
        <p>{vehicle.title}</p>
        <p>carType: {vehicle.vehicleType}</p>
        <div className="mt-auto">
          <Link
            href={vehicle.link.href}
            className="bg-[rgb(235,224,74)] text-xs text-center w-16 block h-6 leading-6 ml-auto"
          >
            {vehicle.link.title}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarCard
