import { getVehicles } from '@/features/cars/utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type CarPageProps = {
  params: {
    carId: string
  }
}

const getCarByCarId = (carId: string) => {
  return getVehicles().find((vehicle) => vehicle.link.href === `/cars/${carId}`)
}

export const generateStaticParams = () => {
  const vehicles = getVehicles()
  return vehicles.map((vehicle) => ({
    carId: vehicle.link.href.split('/').pop(),
  }))
}

export function generateMetadata({ params: { carId } }: CarPageProps): Metadata {
  const car = getCarByCarId(carId)
  if (!car) notFound()

  return {
    title: `Car ${car.title} | HEDIN`,
    description: `Car ${car.brand} page`,
  }
}

export default function CarPage({ params: { carId } }: CarPageProps) {
  const car = getVehicles().find((vehicle) => vehicle.link.href === `/cars/${carId}`)
  if (!car) notFound()
  return <div className="flex gap-6 w-full flex-col">{car.title}</div>
}
