import React from "react";
import { Range } from "react-range";

const MyRangeComponent = () => {
  const [values, setValues] = React.useState([0, 50]);

  return (
    <div>
      <Range
        values={values}
        step={1}
        min={0}
        max={100}
        onChange={(newValues) => {
          setValues(newValues);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "6px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "6px",
                width: "100%",
                borderRadius: "4px",
                background: "rgb(255,255,255)",
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "4px",
              backgroundColor: isDragged
                ? "rgb(255,255,255)"
                : "rgb(190,190,190)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "6px",
                width: "6px",
                borderRadius: "4px",
                backgroundColor: isDragged
                  ? "rgb(190,190,190)"
                  : "rgb(255,255,255)",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "30px" }}>
        {values[0].toFixed(1)} - {values[1].toFixed(1)}
      </output>
    </div>
  );
};

export default MyRangeComponent;
