import { KEYFRAMES } from "./animations.js";

export const GLOBAL_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  ${KEYFRAMES}
  body { background: #FAFAF7; }
  input:focus {
    border-color: #B8860B !important;
    box-shadow: 0 0 0 3px rgba(184,134,11,0.1);
  }
  button:hover:not(:disabled) { filter: brightness(0.96); }
  a.inline-cta {
    display: inline !important;
    padding: 2px 8px !important;
    margin: 0 2px;
    border-radius: 5px !important;
    font-size: 0.88rem !important;
    vertical-align: baseline;
  }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #F4F2EE; }
  ::-webkit-scrollbar-thumb { background: #C8C0B0; border-radius: 3px; }
  @media (max-width: 900px) {
    .detail-grid { grid-template-columns: 1fr !important; }
  }
  .header-nav { display: flex; gap: 24px; align-items: center; }
  .header-hamburger { display: none; }
  @media (max-width: 720px) {
    .header-nav { display: none; }
    .header-hamburger { display: flex; align-items: center; justify-content: center; background: none; border: none; color: #8a7e6b; cursor: pointer; padding: 6px; border-radius: 8px; transition: color 0.15s; }
    .header-hamburger:hover { color: #E8E0D4; }
  }
`;
