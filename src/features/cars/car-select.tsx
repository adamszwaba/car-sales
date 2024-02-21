'use client'
import { Car, filterOptions } from '@/features/cars/utils'
import { useRouter } from 'next/navigation'

const CarSelect = ({ vehicles }: { vehicles: Car[] }) => {
  const router = useRouter()

  return (
    <div>
      <label className="text-xs md:text-sm mr-2" htmlFor="filter">
        Filter:
      </label>
      <select
        className="rounded-md text-xs md:text-sm w-32 md:w-48"
        defaultValue={0}
        id="filter"
        name="filter"
        onChange={(e) => {
          const value = e.target.value
          if (value === '0') {
            router.push('/')
            return
          }
          router.push(`/?${new URLSearchParams({ vehicleType: value }).toString()}`)
        }}
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CarSelect
