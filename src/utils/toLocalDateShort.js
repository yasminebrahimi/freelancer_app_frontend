export default function toLocalDateShort(date) {
  return new Date(date).toLocaleDateString("fi-FI", {});
}
