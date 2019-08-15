export function median(values) {
  if (values.length === 0) return 0;

  values.sort((a, b) => a - b);

  const half = Math.floor(values.length / 2);

  if (values.length % 2) return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}

export default function medianQuantidadeVagas(node) {
  return (
    median(
      node.quantidade_vagas
        .split(',')
        .filter(element => element !== '-')
        .map(element => parseInt(element, 10)),
    )
    * 0.1
    + 8
  );
}
