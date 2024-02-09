export const ballColors = [
  "white", // Cue ball
  "yellow",
  "blue",
  "red",
  "purple",
  "orange",
  "green",
  "maroon", // 1-7 Solids
  "black", // 8-ball
  "yellow",
  "blue",
  "red",
  "purple",
  "orange",
  "green",
  "maroon", // 9-15 Stripes (same colors for simplicity)
];
// Function to calculate positions of balls in a triangle rack
const generateBallPositions = () => {
  const positions = [];
  const tableLength = 10; // Length of the pool table
  const startY = 0.5 + 0.285; // Balls rest on top of the table surface
  const gap = 0.57; // Gap adjusted to match the ball diameter for barely touching

  // Adjust the starting X position based on table length to correctly position the rack
  const startX = tableLength - 11.5; // Adjusted to start at the correct foot spot
  const startZ = 0; // Centered along the Z-axis of the table
  let rowLength = 1;
  let currentZ = startZ;

  for (let row = 0; row < 5; row++) {
    let currentX = startX - row * gap * 0.8; // Adjusting X to form each row of the triangle, stepping back
    for (let i = 0; i < rowLength; i++) {
      positions.push([
        currentX,
        startY,
        currentZ + (i - rowLength / 2 + 0.5) * gap,
      ]);
    }
    rowLength++;
    currentZ = startZ; // Z reset for each row not necessary in this linear adjustment, kept for clarity
  }

  return positions;
};

export const ballPositions = generateBallPositions();
