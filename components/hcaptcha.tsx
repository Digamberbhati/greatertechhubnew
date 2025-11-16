"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from "react";

declare global {
  interface Window {
    hcaptcha?: any;
    onHCaptchaSuccess?: (token: string) => void;
  }
}

export interface HCAPTCHARef {
  reset: () => void;
  getValue: () => string | null;
}

const HCAPTCHAComponent = forwardRef<HCAPTCHARef>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [widgetId, setWidgetId] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.hcaptcha) return;

    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !window.hcaptcha) return;

    const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

    window.onHCaptchaSuccess = (t: string) => setToken(t);

    const id = window.hcaptcha.render(containerRef.current, {
      sitekey,
      callback: "onHCaptchaSuccess",
      "expired-callback": () => setToken(null),
      "chalexpired-callback": () => setToken(null),
    });

    setWidgetId(id);

    return () => {
      if (window.hcaptcha && typeof id === "number") window.hcaptcha.remove(id);
      delete window.onHCaptchaSuccess;
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        if (window.hcaptcha && typeof widgetId === "number") {
          window.hcaptcha.reset(widgetId);
          setToken(null);
        }
      },
      getValue: () => token,
    }),
    [widgetId, token]
  );

  return (
    <div className="flex justify-center my-6">
      <div ref={containerRef} className="h-captcha" />
    </div>
  );
});

HCAPTCHAComponent.displayName = "HCAPTCHAComponent";
export default HCAPTCHAComponent;