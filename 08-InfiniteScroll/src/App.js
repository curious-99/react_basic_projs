import InfiniteScrollList from "./components/InfiniteScrollList";
import "./styles.css";

const List = Array.from({ length: 10000 }, (_, i) => i + 1);
console.log(List);
export default function App() {
  return (
    <InfiniteScrollList list={List} height={400} width={300} itemHeight={35} />
  );
}
