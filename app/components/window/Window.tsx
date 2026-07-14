"use client";

export default function Window() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      {/* Window Frame */}
      <div
        style={{
          position: "relative",
          width: "75%",
          height: "75%",
          border: "18px solid #3b2c24",
          boxShadow:
            "0 0 25px rgba(0,0,0,0.45)",
          background: "transparent",
        }}
      >
        {/* Vertical Beam */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "18px",
            height: "100%",
            background: "#3b2c24",
          }}
        />

        {/* Horizontal Beam */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            width: "100%",
            height: "18px",
            background: "#3b2c24",
          }}
        />
      </div>
    </div>
  );
}