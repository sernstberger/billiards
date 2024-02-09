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
  // Correcting to position the rack one quarter length from the breaking end
  const rackDepth = tableLength * 0.25; // Corrected to truly represent one quarter of the table length
  const startY = 0.5 + 0.285; // Ensuring balls are on top of the table
  const gap = 0.6; // Slightly increased gap to prevent scrunching

  // Corrected to place the rack closer to the breaking end
  const startX = rackDepth; // Now using rackDepth directly for mirrored position
  const startZ = 0; // Centered along the Z-axis
  let rowLength = 1;
  let currentZ = startZ;

  for (let row = 0; row < 5; row++) {
    let currentX = startX + row * gap * 0.5; // Adjusting to move forward for each row
    for (let i = 0; i < rowLength; i++) {
      positions.push([
        currentX,
        startY,
        currentZ + (i - rowLength / 2 + 0.5) * gap,
      ]);
    }
    rowLength++;
    currentZ = startZ; // Reset Z for each row
  }

  return positions;
};

export const ballPositions = generateBallPositions();
