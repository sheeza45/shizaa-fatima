import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <>
  
        <Image
          className="size-48 shadow-xl rounded-md"
          alt="use avatar image"
          src="/avatar.jpg"
          width={192}
          height={192}
          priority
        />
  
      <div className="flex items-center md:items-start">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </>
  )
}

export default Page;