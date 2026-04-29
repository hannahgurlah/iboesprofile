import { SiteShell } from "../components/site-shell";

const inventoryGroups = [
  "Textbooks, learning modules, and classroom kits",
  "ICT equipment, tablets, and projector assets",
  "Clinic, feeding, and sanitation supplies",
  "Sports, arts, and laboratory materials",
];

const stockCardFields = [
  "Item name",
  "Description / specification",
  "Quantity",
  "Unit",
  "Reference number",
  "Remarks",
];

export default function InventoryPage() {
  return (
    <SiteShell
      eyebrow="Operations"
      title="Inventory and Stock Card"
      description="This page highlights how school materials are recorded and includes stock-in and stock-out forms for accountable inventory tracking."
    >
      <section className="content-grid section-space">
        <article className="panel panel-story">
          <p className="eyebrow">Asset Management</p>
          <h2>Tracking resources that keep learning spaces ready.</h2>
          <p>
            Inventory records help the school manage supplies, monitor equipment
            condition, and plan timely replenishment across departments.
          </p>
          <p>
            Clear documentation supports transparency, maintenance planning, and
            uninterrupted use of essential teaching resources.
          </p>
        </article>

        <aside className="panel panel-points">
          <p className="eyebrow">Managed Categories</p>
          <ul>
            {inventoryGroups.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="stock-card-section">
        <div className="section-heading">
          <p className="eyebrow">Stock Card Forms</p>
          <h2>Record incoming and outgoing supplies with clear accountability.</h2>
        </div>

        <div className="stock-card-grid">
          <article className="stock-card-form">
            <div className="stock-card-header">
              <p className="eyebrow">Transaction Form</p>
              <h3>Stock-In</h3>
              <p>
                Use this form when supplies, materials, or equipment are added
                to school inventory.
              </p>
            </div>

            <form className="inventory-form">
              <div className="form-grid">
                <label>
                  <span>Date</span>
                  <input type="date" name="stockInDate" />
                </label>
                <label>
                  <span>Person Responsible</span>
                  <input
                    type="text"
                    name="stockInPerson"
                    placeholder="Enter full name"
                  />
                </label>
              </div>

              <div className="form-grid form-grid-single">
                {stockCardFields.map((field) => (
                  <label key={`stock-in-${field}`}>
                    <span>{field}</span>
                    {field === "Remarks" ? (
                      <textarea
                        name={`stockIn${field.replace(/[^a-zA-Z]/g, "")}`}
                        rows={4}
                        placeholder={`Enter ${field.toLowerCase()}`}
                      />
                    ) : (
                      <input
                        type={field === "Quantity" ? "number" : "text"}
                        name={`stockIn${field.replace(/[^a-zA-Z]/g, "")}`}
                        placeholder={`Enter ${field.toLowerCase()}`}
                      />
                    )}
                  </label>
                ))}
              </div>
            </form>
          </article>

          <article className="stock-card-form">
            <div className="stock-card-header">
              <p className="eyebrow">Transaction Form</p>
              <h3>Stock-Out</h3>
              <p>
                Use this form when supplies are issued, consumed, transferred,
                or removed from available stock.
              </p>
            </div>

            <form className="inventory-form">
              <div className="form-grid">
                <label>
                  <span>Date</span>
                  <input type="date" name="stockOutDate" />
                </label>
                <label>
                  <span>Person Responsible</span>
                  <input
                    type="text"
                    name="stockOutPerson"
                    placeholder="Enter full name"
                  />
                </label>
              </div>

              <div className="form-grid form-grid-single">
                {stockCardFields.map((field) => (
                  <label key={`stock-out-${field}`}>
                    <span>{field}</span>
                    {field === "Remarks" ? (
                      <textarea
                        name={`stockOut${field.replace(/[^a-zA-Z]/g, "")}`}
                        rows={4}
                        placeholder={`Enter ${field.toLowerCase()}`}
                      />
                    ) : (
                      <input
                        type={field === "Quantity" ? "number" : "text"}
                        name={`stockOut${field.replace(/[^a-zA-Z]/g, "")}`}
                        placeholder={`Enter ${field.toLowerCase()}`}
                      />
                    )}
                  </label>
                ))}
              </div>
            </form>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
