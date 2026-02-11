"use client";

import { useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "./ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("cookieConsent");
  });

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="mb-1">Cookie Notice</h4>
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience on our website. By
                continuing to browse, you agree to our use of cookies. For more
                information, please read our Privacy Policy.
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              onClick={declineCookies}
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="flex-1 sm:flex-none"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
