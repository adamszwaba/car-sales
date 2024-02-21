import data from './data.json'

export type Car = {
  id: string
  link: {
    href: string
    title: string
  }
  title: string
  brand: string
  vehicleType: string
}

export const getVehicles = () => {
  return data.cars as unknown as Car[]
}

export const getVehicleTypes = () => {
  const vehicles = getVehicles()
  const vehicleTypes = vehicles.map((vehicle) => vehicle.vehicleType)
  return Array.from(new Set(vehicleTypes))
}

export const filterOptions = [
  {
    label: '--Select Filter',
    value: 0,
  },
  ...getVehicleTypes().map((type) => ({
    label: type,
    value: type,
  })),
]

export const getVehiclesOfType = (type: string | string[] | undefined) => {
  const vehicles = getVehicles()
  if (type === undefined) return vehicles
  if (Array.isArray(type)) return vehicles.filter((vehicle) => type.includes(vehicle.vehicleType))
  return vehicles.filter((vehicle) => vehicle.vehicleType === type)
}
