import PricingColumn from "./PricingColumn"

import { mobileTiers } from "@/data/mobilePricing"
import { tiers } from "@/data/pricing"

const Pricing: React.FC = () => {
  return (
    <div>
      <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
        ))}
      </div>

      <div className="md:hidden grid grid-cols-1 lg:grid-cols-3 gap-8">
        {mobileTiers.map((mobileTiers, index) => (
          <PricingColumn
            key={mobileTiers.name}
            tier={mobileTiers}
            highlight={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default Pricing
