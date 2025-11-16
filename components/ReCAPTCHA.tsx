// components/ReCAPTCHA.tsx
"use client"

import ReCAPTCHA from "react-google-recaptcha"
import { forwardRef, useImperativeHandle, useRef } from "react"

export interface ReCAPTCHARef {
  reset: () => void
  getValue: () => string | null
}

const ReCAPTCHAComponent = forwardRef<ReCAPTCHARef>((_, ref) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  useImperativeHandle(ref, () => ({
    reset: () => recaptchaRef.current?.reset(),
    getValue: () => recaptchaRef.current?.getValue() ?? null,
  }))

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!siteKey) return null

  return (
    <div className="flex justify-center my-6">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        theme="light"
        size="normal"
      />
    </div>
  )
})

ReCAPTCHAComponent.displayName = "ReCAPTCHAComponent"
export default ReCAPTCHAComponent