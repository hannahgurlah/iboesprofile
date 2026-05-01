"use client";

import { useState } from "react";

type ContingencyPlan = {
  title: string;
  risk: string;
  preparedness: string[];
  response: string[];
  recovery: string[];
};

type ContingencyPlanTabsProps = {
  plans: ContingencyPlan[];
};

const sections = [
  ["Preparedness", "preparedness"],
  ["Immediate Response", "response"],
  ["Recovery", "recovery"],
] as const;

export function ContingencyPlanTabs({ plans }: ContingencyPlanTabsProps) {
  const [activePlan, setActivePlan] = useState(plans[0]?.title ?? "");
  const currentPlan = plans.find((plan) => plan.title === activePlan) ?? plans[0];

  if (!currentPlan) {
    return null;
  }

  return (
    <div className="plan-tabs">
      <div className="plan-tab-list" role="tablist" aria-label="Contingency plan hazards">
        {plans.map((plan) => {
          const isSelected = plan.title === currentPlan.title;

          return (
            <button
              key={plan.title}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={isSelected ? "active" : ""}
              onClick={() => setActivePlan(plan.title)}
            >
              {plan.title}
            </button>
          );
        })}
      </div>

      <article className="plan-article plan-tab-panel" role="tabpanel">
        <p className="eyebrow">Contingency Plan During</p>
        <h3>{currentPlan.title}</h3>
        <p className="plan-risk">
          <strong>Risk Context:</strong> {currentPlan.risk}
        </p>

        <div className="plan-tab-sections">
          {sections.map(([label, key]) => (
            <div key={key} className="plan-section">
              <h4>{label}</h4>
              <ul>
                {currentPlan[key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
