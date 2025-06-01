"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    fbq: any
  }
}

export default function MetaPixel() {
  useEffect(() => {
    // Initialize Facebook Pixel
    !((f, b, e, v, n, t, s) => {
      if (f.fbq) return
      n = f.fbq = () => {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = "2.0"
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

    // Initialize with your Pixel ID
    window.fbq("init", "4059666817654292")

    // Track PageView on initial load
    window.fbq("track", "PageView")
  }, [])

  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=4059666817654292&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
