import { Select } from "@/components/ui/Select";
import { Button } from "../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const exampleURL = `https://659a8d3d652b843dea53b3d2.mockapi.io/options`;
  return (
    <main>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        {/* <p>Button Examples:</p>
        <div className="flex flex-row gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="default" icon={<FaSave />}>
            Default with icon
          </Button>
          <Button variant="outline" iconRight={<FaArrowRight />}>
            Outline with right icon
          </Button>
          <Button variant="default" loading={true}>
            Loading...
          </Button>
        </div> */}
        <Select url={exampleURL} />
      </div>
    </main>
  );
}
