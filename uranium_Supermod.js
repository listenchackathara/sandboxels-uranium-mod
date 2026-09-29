elements.enriched_uranium = {
    color: "#4ade80",
    behavior: behaviors.WALL, // Stays solid and in place like a wall
    category: "weapons",       // Puts it in the Weapons tab
    state: "solid",
    density: 19050,           // Very heavy, like real uranium
    tick: function(pixel) {
        // Defines the 4 adjacent directions around the pixel
        let directions = [
            [0, 1],  // Down
            [0, -1], // Up
            [1, 0],  // Right
            [-1, 0]  // Left
        ];
        
        // Loop through each direction to spit out neutrons rapidly
        for (let i = 0; i < directions.length; i++) {
            let x = pixel.x + directions[i][0];
            let y = pixel.y + directions[i][1];
            
            // 20% chance per frame to spit a neutron into empty space (null)
            if (Math.random() < 0.20) {
                if (isEmpty(x, y, true)) { 
                    createPixel("neutron", x, y);
                }
            }
        }
    }
};
