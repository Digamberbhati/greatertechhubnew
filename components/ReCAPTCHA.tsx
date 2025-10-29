"use client"

import ReCAPTCHA from "react-google-recaptcha"
import { forwardRef, useImperativeHandle, useRef } from "react"

export interface ReCAPTCHARef {
  reset: () => void
  getValue: () => string | null
}

interface ReCAPTCHAProps {
  onChange: (token: string | null) => void
}

const ReCAPTCHAComponent = forwardRef<ReCAPTCHARef, ReCAPTCHAProps>(({ onChange }, ref) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  useImperativeHandle(ref, () => ({
    reset: () => recaptchaRef.current?.reset(),
    getValue: () => recaptchaRef.current?.getValue() ?? null,
  }))

  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LcvIfkrAAAAADHKLe76tz_IB8D3WFcr7eK9G4sk"}
        onChange={onChange}
        theme="light"
      />
    </div>
  )
})

ReCAPTCHAComponent.displayName = "ReCAPTCHAComponent"

export default ReCAPTCHAComponent