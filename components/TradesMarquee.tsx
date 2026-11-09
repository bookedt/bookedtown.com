import type { LucideIcon } from "lucide-react";
import {
  Trash2, House, Droplets, Fan, Zap, PaintRoller, HardHat, Hammer, Construction, Sun, TreePine, CloudRain,
  Waves, Sparkles, Truck, Layers, Grid3x3, BrickWall, Fence, Cuboid, Wrench, WashingMachine, Warehouse, KeyRound,
} from "lucide-react";

const TRADES: { name: string; Icon: LucideIcon }[] = [
  { name: "Construction", Icon: Construction },
  { name: "Solar", Icon: Sun },
  { name: "Tree Service", Icon: TreePine },
  { name: "Gutter Cleaning", Icon: CloudRain },
  { name: "Junk Removal", Icon: Trash2 },
  { name: "Roofing", Icon: House },
  { name: "Plumbing", Icon: Droplets },
  { name: "HVAC", Icon: Fan },
  { name: "Electrical", Icon: Zap },
  { name: "Painting", Icon: PaintRoller },
  { name: "General Contracting", Icon: HardHat },
  { name: "Remodeling", Icon: Hammer },
  { name: "Pressure Washing", Icon: Waves },
  { name: "Cleaning", Icon: Sparkles },
  { name: "Moving", Icon: Truck },
  { name: "Flooring", Icon: Layers },
  { name: "Tile & Stone", Icon: Grid3x3 },
  { name: "Drywall", Icon: BrickWall },
  { name: "Fence", Icon: Fence },
  { name: "Concrete", Icon: Cuboid },
  { name: "Handyman", Icon: Wrench },
  { name: "Appliance Repair", Icon: WashingMachine },
  { name: "Garage Door", Icon: Warehouse },
  { name: "Property Maintenance", Icon: KeyRound },
];

function Row({ items, reverse = false }: { items: typeof TRADES; reverse?: boolean }) {
  // The list is doubled so the loop is seamless (the animation moves by exactly half).
  const doubled = [...items, ...items];
  return (
    <div className={`trow${reverse ? " rev" : ""}`}>
      <div className="ttrack">
        {doubled.map(({ name, Icon }, i) => (
          <span className="tpill" key={name + i}>
            <span className="ticon"><Icon size={18} strokeWidth={2.1} aria-hidden="true" /></span>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TradesMarquee() {
  const half = Math.ceil(TRADES.length / 2);
  return (
    <section className="trades" aria-label="Trades we work with">
      <p className="trades-title">Built for the trades that run on referrals and phone calls</p>
      <div aria-hidden="true">
        <Row items={TRADES.slice(0, half)} />
        <Row items={TRADES.slice(half)} reverse />
      </div>
      <ul className="sr-only">
        {TRADES.map((t) => <li key={t.name}>{t.name}</li>)}
      </ul>
    </section>
  );
}
