import Image from 'next/image'

import ContentImg from 'public/assets/images/Content.png'

const MainHeroImage = () => {
  return (
    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 w-1/2">
      <Image
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={ContentImg}
        alt="Savvy image"
      />
    </div>
  )
}

export default MainHeroImage
