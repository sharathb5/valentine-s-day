"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

const MAX_NO_CLICKS = 8

export default function Page() {
  const router = useRouter()
  const [noClicks, setNoClicks] = useState(0)
  const [yesClicked, setYesClicked] = useState(false)

  const noScale = useMemo(() => {
    if (noClicks === 0) return 1
    const minScale = 0.2
    const step = (1 - minScale) / MAX_NO_CLICKS
    return Math.max(minScale, 1 - noClicks * step)
  }, [noClicks])

  const handleNo = () => {
    setNoClicks((prev) => (prev >= MAX_NO_CLICKS ? 0 : prev + 1))
  }

  const handleYes = () => {
    setYesClicked(true)
    window.setTimeout(() => {
      router.push("/menu")
    }, 900)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        background: "#f0eceb",
        fontFamily: "Times New Roman, serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          background: "#f0eceb",
          border: "2px solid #b9979d",
          borderRadius: "16px",
          padding: "48px 24px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#7b2536",
            fontSize: "clamp(48px, 9vw, 96px)",
            lineHeight: 1,
            fontWeight: 700,
            fontFamily: "cursive",
          }}
        >
          Will you be my
          <br />
          valentine?
        </h1>

        {yesClicked ? (
          <p
            style={{
              margin: 0,
              color: "#7b2536",
              fontSize: "clamp(40px, 6vw, 56px)",
              fontWeight: 700,
              textTransform: "lowercase",
            }}
          >
            okkk
          </p>
        ) : (
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", alignItems: "center" }}>
            <button
              type="button"
              onClick={handleYes}
              style={{
                border: "1px solid #7b2536",
                background: "#7b2536",
                color: "#fff",
                padding: "12px 40px",
                fontSize: "clamp(24px, 4vw, 40px)",
                letterSpacing: "2px",
                cursor: "pointer",
              }}
            >
              YES
            </button>

            <button
              type="button"
              onClick={handleNo}
              style={{
                border: "1px solid #b9979d",
                background: "transparent",
                color: "#5b5b5b",
                padding: "12px 40px",
                fontSize: "clamp(24px, 4vw, 40px)",
                letterSpacing: "2px",
                cursor: "pointer",
                transform: `scale(${noScale})`,
                transformOrigin: "center",
              }}
            >
              NO
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
