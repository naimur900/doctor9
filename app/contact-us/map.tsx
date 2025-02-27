'use client'

import { useEffect, useRef } from 'react'

export default function Map() {
  const mapRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          mapRef.current?.setAttribute('src', mapRef.current.dataset.src || '')
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden">
      <iframe
        ref={mapRef}
        width="100%"
        // width="480"
        height="80%"
        // height="480"
        style={{ border: 0 }}
        loading="lazy"
        data-src="
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0561790933657!2d90.36970697441473!3d23.745375978673817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c7c2d90a9%3A0x26436b1b9dcd741e!2sIbn%20Sina%20Diagnostic%20and%20Imaging%20Center%20(Dhanmondi%209A)!5e0!3m2!1sen!2sbd!4v1737896980786!5m2!1sen!2sbd"      ></iframe>
    </div>
  )
}

