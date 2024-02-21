import { getVehiclesOfType } from '@/features/cars/utils'
import CarCard from '@/features/cars/car-card'
import CarSelect from '@/features/cars/car-select'

const Home = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const filter = searchParams['vehicleType']

  const vehicles = getVehiclesOfType(filter)

  return (
    <div className="flex gap-6 w-full flex-col">
      <CarSelect vehicles={vehicles} />
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-8 justify-between">
        {vehicles.map((vehicle) => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}

export default Home
