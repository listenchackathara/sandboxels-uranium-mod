if (!window.elements) { window.elements = {}; }

elements.enriched_uranium = {
    color: "#4ade80",
    behavior: behaviors.WALL,
    category: "weapons",
    state: "solid",
    density: 19050,
    tick: function(pixel) {
        let directions = [,   // Down
            [0, -1],  // Up,   // Right
            [-1, 0]   // Left
        ];
        for (let i = 0; i < directions.length; i++) {
            let x = pixel.x + directions[i][0];
            let y = pixel.y + directions[i][1];
            if (Math.random() < 0.20) {
                if (isEmpty(x, y, true)) { 
                    createPixel("neutron", x, y);
                }
            }
        }
    }
};
