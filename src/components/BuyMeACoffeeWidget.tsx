"use client";

import Script from "next/script";

export default function BuyMeACoffeeWidget() {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      strategy="lazyOnload"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="esdrasirioq"
      data-description="Support me on Buy me a coffee!"
      data-message="Thanks for visiting! You can now buy me a coffee"
      data-color="#BD5FFF"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      onLoad={() => {
        const evt = document.createEvent("Event");
        evt.initEvent("DOMContentLoaded", false, false);
        window.dispatchEvent(evt);
      }}
    />
  );
}
