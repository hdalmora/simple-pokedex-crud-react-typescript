import { Container } from "./styles";

interface ICustomBar {
  value: number;
}

export const CustomBar = ({ value }: ICustomBar) => {
  return (
    <Container>
      <span></span>
      <div>
        <div style={{ width: `${value}%` }} />

        <span className="current-value" style={{ left: `${value - 5}%` }}>
          {value}
        </span>
      </div>
      <span></span>
    </Container>
  );
};

export default CustomBar;
