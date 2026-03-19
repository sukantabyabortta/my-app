import { onCLS, onFID, onFCP, onLCP, onTTFB } from "web-vitals";

function reportWebVitals() {
  onCLS(console.log);
  onFID(console.log);
  onFCP(console.log);
  onLCP(console.log);
  onTTFB(console.log);
}

export default reportWebVitals;