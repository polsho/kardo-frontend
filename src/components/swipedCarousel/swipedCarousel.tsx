import React, { TouchEventHandler, TouchEvent, useEffect, useState } from 'react'
import styles from './swipedCarousel.module.css'
import clsx from 'clsx'

type TSwipedCarouselProps = {
  children: JSX.Element[]
}

export const SwipedCarousel = ({ children }: TSwipedCarouselProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  const [touchPosition, setTouchPosition] = useState(0)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition

    if (touchDown === 0) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(0)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <div className={styles.content} style={{ transform: `translateX(-${currentIndex * 102}%)` }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
