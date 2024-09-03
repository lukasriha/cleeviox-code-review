interface Props {
  probability: string;
}

const Probability = ({ probability }: Props) => {
  return <div>{probability} %</div>;
};

const Probabilities = ({ items }: { items: Props[] }) =>
  items && (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <Probability probability={item.probability} key={idx} />
      ))}
    </div>
  );

export default Probabilities;
