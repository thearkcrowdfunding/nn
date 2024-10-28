"use client";

import React, { useState, useEffect, useRef } from "react";

const LeykaForm: React.FC = () => {
  const [iframeHeight, setIframeHeight] = useState(800);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://nasiliu.net") return;
      if (event.data && typeof event.data.height === "number") {
        setIframeHeight(event.data.height);
        setIsLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);

    const sendHeightRequest = () => {
      iframeRef.current?.contentWindow?.postMessage({ type: "getHeight" }, "https://nasiliu.net");
    };

    const intervalId = setInterval(sendHeightRequest, 1000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="leyka-form-wrapper">
      {isLoading && <div>Loading donation form...</div>}
      <iframe
        ref={iframeRef}
        src="https://nasiliu.net/campaign/support_new/?leyka_payment_form=1"
        width="100%"
        height={`${iframeHeight}px`}
        style={{ 
          border: "none", 
          overflow: "hidden",
          display: isLoading ? 'none' : 'block'
        }}
        title="Leyka Donation Form"
      />
      <style jsx>{`
        .leyka-form-wrapper {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          overflow: hidden;
          height: ${iframeHeight}px;
        }
      `}</style>
    </div>
  );
};

export default LeykaForm;
