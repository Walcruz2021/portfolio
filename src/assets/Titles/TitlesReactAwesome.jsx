//npm install react-awesome-reveal @emotion/react

import { Slide  } from "react-awesome-reveal";

export default function TitlesReactAwesome() {
  return (
    <div style={{ backgroundColor: "red" }}>
     <h2>Our Features</h2>

{/* Items slide in one after another */}
<Slide direction="up" cascade triggerOnce>
  <div className="feature">🚀 Performance</div>
  <div className="feature">💡 Simplicity</div>
  <div className="feature">🎨 Customization</div>
</Slide>

<Slide direction="left" cascade triggerOnce>
  <div className="feature">🚀 Performance</div>
  <div className="feature">💡 Simplicity</div>
  <div className="feature">🎨 Customization</div>
</Slide>
    </div>
  );
}

