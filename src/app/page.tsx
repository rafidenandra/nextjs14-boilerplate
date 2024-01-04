import { Button } from "./components/ui/Button";

export default function Home() {
  return (
    <main>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="subtle">Subtle</Button>
      </div>
    </main>
  );
}
