"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface AsciiBackgroundProps {
  className?: string
}

export function AsciiBackground({ className = "" }: AsciiBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const characters = "░▒▓█▄▀■□●○◆◇▪▫▬▭▮▯▰▱▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅"
  const gridSize = { cols: 30, rows: 15 }
  const [grid, setGrid] = useState<string[][]>([])

  // Initialize grid with random ASCII characters
  useEffect(() => {
    const newGrid = Array(gridSize.rows)
      .fill(0)
      .map(() =>
        Array(gridSize.cols)
          .fill(0)
          .map(() => characters[Math.floor(Math.random() * characters.length)]),
      )
    setGrid(newGrid)
  }, [])

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Update grid based on mouse position
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const updateGrid = () => {
      const newGrid = [...grid]

      // Calculate which cell the mouse is over
      const cellWidth = dimensions.width / gridSize.cols
      const cellHeight = dimensions.height / gridSize.rows

      const mouseCol = Math.floor(mousePosition.x / cellWidth)
      const mouseRow = Math.floor(mousePosition.y / cellHeight)

      // Update characters in a radius around the mouse
      const radius = 5
      for (let row = 0; row < gridSize.rows; row++) {
        for (let col = 0; col < gridSize.cols; col++) {
          // Calculate distance from mouse
          const distance = Math.sqrt(Math.pow(col - mouseCol, 2) + Math.pow(row - mouseRow, 2))

          // Update character if within radius
          if (distance < radius && Math.random() > 0.7) {
            newGrid[row][col] = characters[Math.floor(Math.random() * characters.length)]
          }
        }
      }

      setGrid(newGrid)
    }

    const interval = setInterval(updateGrid, 100)
    return () => clearInterval(interval)
  }, [mousePosition, dimensions, grid])

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none z-0 opacity-10 ${className}`}>
      <div className="font-mono text-[8px] md:text-xs leading-none tracking-tighter overflow-hidden">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((char, colIndex) => {
              // Calculate distance from mouse for subtle animation
              const cellWidth = dimensions.width / gridSize.cols
              const cellHeight = dimensions.height / gridSize.rows
              const cellX = colIndex * cellWidth + cellWidth / 2
              const cellY = rowIndex * cellHeight + cellHeight / 2
              const distance = Math.sqrt(Math.pow(cellX - mousePosition.x, 2) + Math.pow(cellY - mousePosition.y, 2))
              const maxDistance = Math.sqrt(Math.pow(dimensions.width, 2) + Math.pow(dimensions.height, 2))
              const normalizedDistance = distance / maxDistance

              return (
                <motion.span
                  key={colIndex}
                  style={{
                    width: `${100 / gridSize.cols}%`,
                    height: `${100 / gridSize.rows}vh`,
                    display: "inline-block",
                  }}
                  animate={{
                    opacity: 0.3 + (1 - normalizedDistance) * 0.7,
                    scale: 1 + (1 - normalizedDistance) * 0.5,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {char}
                </motion.span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
