const SHEET_ID = "1Lu1wccCd8QsLtJP3jsfQXub4tVNXRrnM8lC588SDbTA";
const CLIENT_ID = "400130720536-l3dqr1rnpo1m1n7r2liaman6lptt7nk8.apps.googleusercontent.com";

const CURRENT_YEAR = 2026;

function formatLocalDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
