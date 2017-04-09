export default function isScalar(value) {
  const type = typeof value;
  return type === 'string' || type === 'number' || type === 'boolean';
}
