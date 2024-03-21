import functionPlot from "function-plot"
import { useRef, useEffect, useState } from "react"

export default function Plot() {
  const graphRef = useRef<HTMLDivElement>(null)
  const [amplitude, setAmplitude] = useState(1)
  const [frequency, setFrequency] = useState(1)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    try {
      functionPlot({
        target: graphRef?.current ?? "",
        yAxis: { domain: [-1, 9] },
        grid: true,
        data: [
          {
            fn: `${amplitude} * sin(${frequency} * x + ${phase})`,

          }
        ]
      })
    } catch (e) {}
  }, [amplitude, frequency, phase])


  return (
  <main>
    <input
      type="range"
      value={amplitude}
      onChange={e => setAmplitude(Number(e.target.value))}
      min="1"
      max="10"
      step="1"
    />
    <input
      type="range"
      value={frequency}
      onChange={e => setFrequency(Number(e.target.value))}
      min="1"
      max="10"
      step="1"
    />
    <input
      type="range"
      value={phase}
      onChange={e => setPhase(Number(e.target.value))}
      min="0"
      max="2"
      step="0.1"
    />

    <div id="hola" ref={graphRef}  />
  </main>
  )
}
