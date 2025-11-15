// components/ReCAPTCHA.tsx
"use client"

import ReCAPTCHA from "react-google-recaptcha"
import { forwardRef, useImperativeHandle, useRef } from "react"

export interface ReCAPTCHARef {
  reset: () => void
  getValue: () => string | null
}

interface ReCAPTCHAProps {
  onChange: (token: string | null) => void
  siteKey?: string // Optional override (only for internal testing)
}

const ReCAPTCHAComponent = forwardRef<ReCAPTCHARef, ReCAPTCHAProps>(({ onChange, siteKey }, ref) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // Expose reset & getValue
  useImperativeHandle(ref, () => ({
    reset: () => recaptchaRef.current?.reset(),
    getValue: () => recaptchaRef.current?.getValue() ?? null,
  }))

  // LIVE: Only from .env → No fallback test key
  const finalSiteKey = siteKey || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  // Critical: Throw error if key missing in production
  if (!finalSiteKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("RECAPTCHA SITE KEY IS MISSING! Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env")
    }
    return (
      <div className="text-red-600 text-center p-4 bg-red-50 rounded-lg">
        reCAPTCHA configuration error. Contact admin.
      </div>
    )
  }

  return (
    <div className="flex justify-center my-6">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={finalSiteKey}
        onChange={onChange}
        theme="light"
        size="normal"
      />
    </div>
  )
})

ReCAPTCHAComponent.displayName = "ReCAPTCHAComponent"
export default ReCAPTCHAComponent