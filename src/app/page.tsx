import { Grid } from "@/components/template/Grid";
import Wrap from "@/components/template/Wrap";
import Container from "@/components/template/Container";

export default function Home() {
  return (
    <div>
      <h1>Homee</h1>
      <Grid numCol={5} numRow={2}>
        <p className="w-20 h-20 bg-red-600">1</p>
        <p className="w-20 h-20 bg-blue-600">2</p>
        <p className="w-20 h-20 bg-green-600">3</p>
        <p className="w-20 h-20 bg-yellow-600">4</p>
        <p className="w-20 h-20 bg-pink-600">5</p>
        <p className="w-20 h-20 bg-purple-600">6</p>
        <p className="w-20 h-20 bg-indigo-600">7</p>
        <p className="w-20 h-20 bg-gray-600">8</p>
      </Grid>
    </div>
  );
}
