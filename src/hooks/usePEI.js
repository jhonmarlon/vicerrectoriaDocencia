import { useState } from "react"

const usePEI = () => {

    const [activeButton, setActiveButton] = useState(0)

    const handleToggleActiveIcon = ({ target }) => {
      const { id } = target
      setActiveButton(parseInt(id.split('_')[1]))
    }

    return {
        handleToggleActiveIcon,
        activeButton
    }
}

export default usePEI
