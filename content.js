/* Each question stores the zero-based position of the correct answer. */
const bonusUnits = [
  {
    title: "Motion", icon: "↗", theme: "mint", formula: "a = Δv / Δt",
    summary: "Describe where things go and how their velocity changes.",
    concepts: [
      ["Distance vs. displacement", "Distance is the total path length. Displacement is the change in position, with a direction. Walk 5 m east and 5 m west and you travel 10 m, with zero displacement."],
      ["Speed vs. velocity", "Speed tells you how fast you move. Velocity includes direction. On a straight line, choose a positive direction before assigning signs."],
      ["Acceleration", "Average acceleration is the change in velocity divided by elapsed time. When velocity and acceleration point in opposite directions, the object slows down at that instant."]
    ],
    example: "A bike goes from 2 m/s east to 8 m/s east in 3 s. Taking east as positive, a = (8 − 2) / 3 = 2 m/s² east.",
    practice: [
      ["You walk 7 m east, then 3 m west. What is your displacement?", ["10 m east", "4 m east", "4 m west", "3 m west"], 1, "Take east as positive. The signed changes add to +7 − 3 = +4 m."],
      ["A skater's velocity changes from +3 to +9 m/s in 2 s. What is the average acceleration?", ["+6 m/s²", "+12 m/s²", "+3 m/s²", "−3 m/s²"], 2, "Divide the velocity change by time: (9 − 3) / 2 = +3 m/s²."],
      ["A car is moving west and slowing down. Which way is its acceleration?", ["East", "West", "Up", "It is zero"], 0, "Its velocity points west and is decreasing in magnitude, so acceleration points east."]
    ],
    quiz: [
      ["A runner completes one lap of a 400 m track. What is the displacement?", ["400 m", "200 m", "0 m", "It depends on speed"], 2, "The runner returns to the starting position, so displacement is zero."],
      ["Velocity changes from −2 m/s to −8 m/s in 3 s. Find the average acceleration.", ["+2 m/s²", "−2 m/s²", "−6 m/s²", "+6 m/s²"], 1, "Compute (−8 − (−2)) / 3 = −2 m/s²."]
    ]
  },
  {
    title: "Forces", icon: "→", theme: "peach", formula: "ΣF = ma",
    summary: "Connect pushes and pulls to changes in motion.",
    concepts: [
      ["Net force", "Add the forces acting on the same object, taking their directions into account. Forces in opposite directions subtract in one dimension."],
      ["Newton’s second law", "Acceleration points in the direction of the net force. For the same net force, a greater mass gives a smaller acceleration."],
      ["Balanced forces", "When the net force is zero, acceleration is zero. An object can be at rest or continue at constant velocity."]
    ],
    example: "A 2 kg box is pushed 10 N left while friction acts 4 N right. The net force is 6 N left, so the acceleration is 6 / 2 = 3 m/s² left.",
    practice: [
      ["A 10 N push acts left and friction acts 6 N right. What is the net force?", ["16 N left", "4 N right", "0 N", "4 N left"], 3, "The forces oppose each other, so 10 − 6 = 4 N in the direction of the push."],
      ["A 3 kg cart experiences a net force of 12 N right. What is its acceleration?", ["36 m/s² right", "4 m/s² right", "4 m/s² left", "9 m/s² right"], 1, "Divide net force by mass: 12 / 3 = 4 m/s² right."],
      ["A moving cart has zero net force. What happens to its velocity?", ["It stays constant", "It drops to zero immediately", "It doubles", "It reverses"], 0, "Zero net force means zero acceleration, so velocity stays constant."]
    ],
    quiz: [
      ["A puck moves right while its net force points left. What points left right now?", ["Only velocity", "Both velocity and acceleration", "Only acceleration", "Neither"], 2, "Acceleration follows the net force. The puck can still move right while slowing down."],
      ["Two carts experience equal net forces. Cart B has twice the mass of cart A. How does B accelerate?", ["Twice as much", "Half as much", "The same", "Four times as much"], 1, "Since a = F / m, doubling mass halves acceleration for a fixed net force."]
    ]
  },
  {
    title: "Energy", icon: "ϟ", theme: "gold", formula: "KE = ½mv²",
    summary: "Track energy as objects move, rise, and fall.",
    concepts: [
      ["Kinetic energy", "Kinetic energy is energy of motion. It depends on mass and the square of speed, so doubling speed quadruples kinetic energy."],
      ["Gravitational potential energy", "Near Earth’s surface, use PE = mgh, where h is height above a chosen reference and g ≈ 9.8 m/s²."],
      ["Conservation", "When only gravity does work on a falling object, kinetic energy increases as gravitational potential energy decreases. Their sum stays constant."]
    ],
    example: "A 2 kg ball travels at 3 m/s. Its kinetic energy is ½ × 2 × 3² = 9 J.",
    practice: [
      ["What is the kinetic energy of a 4 kg object moving at 3 m/s?", ["6 J", "12 J", "18 J", "36 J"], 2, "Use ½mv² = ½ × 4 × 9 = 18 J."],
      ["A ball falls with negligible air resistance. Which quantity increases?", ["Gravitational potential energy", "Kinetic energy", "Total mechanical energy", "Mass"], 1, "The ball speeds up as gravitational potential energy converts to kinetic energy."],
      ["A 2 kg object is lifted 5 m. Use g = 10 m/s². How much does its potential energy increase?", ["100 J", "10 J", "25 J", "50 J"], 0, "Use mgΔh = 2 × 10 × 5 = 100 J."]
    ],
    quiz: [
      ["If a bicycle doubles its speed, its kinetic energy becomes what?", ["Twice as large", "Half as large", "Unchanged", "Four times as large"], 3, "Kinetic energy is proportional to speed squared."],
      ["A ball is dropped from rest and loses 15 J of gravitational potential energy. Ignore air resistance. How much kinetic energy does it gain?", ["0 J", "7.5 J", "15 J", "30 J"], 2, "The loss in potential energy equals the gain in kinetic energy."]
    ]
  },
  {
    title: "Momentum", icon: "⇥", theme: "blue", formula: "p = mv",
    summary: "Explain collisions and what happens during an impact.",
    concepts: [
      ["Momentum", "Momentum is mass times velocity. Because velocity has direction, momentum does too. In one dimension, use signs for opposite directions."],
      ["Impulse", "Impulse equals the change in momentum. It also equals the average net force multiplied by the time it acts."],
      ["Conservation in collisions", "If the net external impulse on the system is negligible, total momentum before a collision equals total momentum after it, including when objects stick together."]
    ],
    example: "A 2 kg cart moving at +3 m/s sticks to a stationary 1 kg cart. Total momentum is +6 kg·m/s, so the joined carts move at +6 / 3 = +2 m/s.",
    practice: [
      ["A 3 kg cart travels at −2 m/s. What is its momentum?", ["+6 kg·m/s", "−6 kg·m/s", "−1 kg·m/s", "+1 kg·m/s"], 1, "Multiply mass by signed velocity: 3 × (−2) = −6 kg·m/s."],
      ["A 5 N net force acts right for 2 s. What is the impulse?", ["2.5 N·s right", "7 N·s left", "10 N·s left", "10 N·s right"], 3, "Impulse is the average net force times elapsed time: 5 × 2 = 10 N·s right."],
      ["Two 1 kg carts stick together. One was moving at +4 m/s, and the other was at rest. Ignore external impulse. What is their final velocity?", ["+2 m/s", "+4 m/s", "+8 m/s", "0 m/s"], 0, "The total momentum is +4 kg·m/s and the combined mass is 2 kg."]
    ],
    quiz: [
      ["A passenger comes to rest with the same momentum change over a longer time. What happens to the magnitude of the average net force?", ["It increases", "It stays the same", "It decreases", "It becomes zero"], 2, "The same impulse spread over more time requires a smaller average force."],
      ["Two carts have momenta +6 and −6 kg·m/s and stick together. Ignore external impulse. What is their final velocity?", ["0 m/s", "+6 m/s", "−6 m/s", "It must be positive"], 0, "The total momentum is zero, so the joined carts have zero velocity."]
    ]
  }
];

// Each section includes a lesson, a worked example, recall cards, and two distinct checks.
const chapters = [
  {
    title: "Units and Measurement", theme: "mint", sections: [
      ["1.1", "The Scope and Scale of Physics",
        ["Physics builds explanations that can be checked against measurements, from the size of a cell to the motion of a galaxy.", [
          ["Models, laws, and theories", "A model simplifies a situation, such as treating a ball as a point. A law describes a pattern, while a theory explains a range of observations."],
          ["Scientific notation", "Write a positive measurement as a number from 1 up to 10 multiplied by a power of ten. A negative exponent makes the number smaller, as in 3 × 10⁻⁴ m."],
          ["Order of magnitude", "This is the nearest power of ten on a logarithmic scale. For a coefficient above √10 (about 3.16), round the power up. A difference of two orders of magnitude means a factor of about 100."]
        ]],
        "A cell 0.000008 m across is 8 × 10⁻⁶ m. Its order of magnitude is 10⁻⁵ m because 8 is greater than √10.",
        [["Scientific notation", "A number written as a coefficient times a power of ten."], ["Order of magnitude", "The nearest power of ten on a logarithmic scale."]],
        ["Write 0.00032 m in scientific notation.", ["3.2 × 10⁻⁴ m", "3.2 × 10⁻³ m", "3.2 × 10⁴ m", "32 × 10⁻⁴ m"], 0, "Moving the decimal four places right gives 3.2, so multiply by 10⁻⁴."],
        ["About how many orders of magnitude separate 10⁻³ m and 10⁵ m?", ["2", "5", "8", "15"], 2, "Their ratio is 10⁵ ÷ 10⁻³ = 10⁸."]],
      ["1.2", "Units and Standards",
        ["A measurement needs both a number and a unit. The number tells you how many copies of the unit fit into the quantity.", [
          ["SI base units", "SI uses the meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), and candela (cd). Most motion problems need just meters and seconds."],
          ["Derived units", "Combine base units the same way you combine the quantities. Speed is distance divided by time, so its SI unit is m/s. Acceleration is velocity divided by time, so its unit is m/s²."],
          ["Metric prefixes", "Kilo means 10³, centi means 10⁻², milli means 10⁻³, micro means 10⁻⁶, and nano means 10⁻⁹. For example, 1 mm is 0.001 m."]
        ]],
        "A measurement of 45 μs is 45 × 10⁻⁶ s = 4.5 × 10⁻⁵ s.",
        [["SI base unit", "A reference unit for a base quantity, such as the meter for length."], ["Derived unit", "A unit formed by combining base units, such as m/s for speed."]],
        ["What is the SI base unit of mass?", ["Gram", "Newton", "Kilogram", "Pound"], 2, "The kilogram is the SI base unit of mass."],
        ["What does the prefix nano mean?", ["10⁻⁹", "10⁻⁶", "10⁻³", "10⁹"], 0, "Nano denotes one billionth of the underlying unit."]],
      ["1.3", "Unit Conversion",
        ["A conversion changes the unit used to describe a quantity. The physical amount stays the same.", [
          ["Choose a factor", "Because 1 km and 1000 m are equal, the ratio (1000 m)/(1 km) equals one. Multiply by it to turn kilometers into meters."],
          ["Cancel units", "Place the unit you want to remove on the opposite side of the fraction. In km/h, hours are already in the denominator, so use (1 h)/(3600 s) to cancel them."],
          ["Handle powers", "Square the whole conversion factor for area and cube it for volume. Since 1 m = 100 cm, 1 m² = 100² cm²."]
        ]],
        "Convert 72 km/h: 72 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 20 m/s.",
        [["Conversion factor", "A ratio of equivalent quantities that changes units while preserving the physical amount."]],
        ["Convert 90 km/h to m/s.", ["9 m/s", "25 m/s", "32.4 m/s", "324 m/s"], 1, "Multiply by 1000/3600, giving 90/3.6 = 25 m/s."],
        ["Convert 2 m² to cm².", ["200 cm²", "2,000 cm²", "20,000 cm²", "200,000 cm²"], 2, "Since 1 m = 100 cm, 1 m² = 100² cm²."]],
      ["1.4", "Dimensional Analysis",
        ["Dimensional analysis checks whether an equation could make sense before you plug in numbers.", [
          ["Dimensions vs. units", "A dimension is the kind of quantity being measured. A meter and a centimeter are different units for the same dimension, length (L)."],
          ["Check the algebra", "Use L for length, M for mass, and T for time. Velocity has dimension L/T and acceleration has L/T². You can add or equate terms only when their dimensions match."],
          ["Know what the check can tell you", "Both at² and ½at² have dimensions of length. The check catches incompatible units but cannot decide which numerical factor is correct. Inputs to sin, cos, exp, and log must be dimensionless."]
        ]],
        "If x = ½at², then [at²] = (L/T²)T² = L, which matches position.",
        [["Dimension", "The type of physical quantity expressed using base dimensions such as L, M, and T."], ["Dimensional consistency", "The requirement that both sides of an equation and all added terms have matching dimensions."]],
        ["What are the dimensions of acceleration?", ["L/T", "L/T²", "LT²", "T/L"], 1, "Acceleration is velocity divided by time, so its dimensions are (L/T)/T."],
        ["Which expression has dimensions of length if v is speed, a is acceleration, and t is time?", ["v/t", "at", "v²/a", "a/v"], 2, "(L²/T²)/(L/T²) simplifies to L."]],
      ["1.5", "Estimates and Fermi Calculations",
        ["A Fermi estimate gives you a reasonable scale when you have limited information.", [
          ["Break down the question", "To estimate bottles used in a school year, estimate students, bottles per student per week, and weeks of school."],
          ["Write your assumptions", "Use round numbers you can explain. Carry the units so you can see that students and weeks cancel, leaving bottles."],
          ["Test the estimate", "Change an uncertain input and see how much the result moves. If you double bottles per student, the total doubles, so that assumption matters."]
        ]],
        "Estimate 200 students × 3 bottles per student per week × 30 school weeks ≈ 18,000 bottles, or roughly 2 × 10⁴ bottles.",
        [["Fermi estimate", "A rough calculation built from simpler estimates and stated assumptions."]],
        ["A student reads about 20 pages a day for 250 days. Estimate the total.", ["500", "2,000", "5,000", "50,000"], 2, "Multiply 20 pages/day by 250 days to get about 5,000 pages."],
        ["A hall has about 30 rows with 20 seats per row. Which estimate is best?", ["50 seats", "60 seats", "600 seats", "6,000 seats"], 2, "Rows × seats per row gives about 30 × 20 = 600 seats."]],
      ["1.6", "Significant Figures",
        ["Your final number should reflect how precisely you measured it.", [
          ["Accuracy, precision, and uncertainty", "Accuracy is closeness to a reference value. Precision is how closely repeated readings agree or how finely a value is resolved. If known, report uncertainty, such as 2.40 ± 0.02 m."],
          ["Count significant digits", "Ignore leading zeros. Zeros between nonzero digits count, as do trailing zeros after a decimal point. For example, 0.00450 has three significant figures."],
          ["Round at the end", "For multiplication or division, match the fewest significant figures. For addition or subtraction, match the least precise decimal place. Exact counts and defined conversions do not limit precision."]
        ]],
        "2.4 m × 1.35 m = 3.24 m² before rounding. With two significant figures, report 3.2 m².",
        [["Accuracy", "Closeness to a reference or accepted value."], ["Precision", "How closely repeated measurements agree, or how finely a value is resolved."], ["Significant figures", "The reported digits that convey a measurement’s precision."]],
        ["How many significant figures are in 0.00450?", ["2", "3", "4", "5"], 1, "Leading zeros only locate the decimal. The digits 4, 5, and the final zero count."],
        ["What is 12.3 m + 0.46 m with appropriate rounding?", ["12.76 m", "12.7 m", "12.8 m", "13 m"], 2, "The unrounded sum is 12.76 m. The least precise input ends at tenths, so report 12.8 m."]],
      ["1.7", "Solving Problems in Physics",
        ["Use a repeatable plan so you can spend less time guessing which equation fits.", [
          ["Set up the situation", "List the known quantities and what you need to find. Sketch the motion, choose a positive direction, and convert to compatible units."],
          ["Choose a model", "State the assumptions before choosing a formula. For instance, use constant-acceleration equations only if acceleration stays constant over the interval."],
          ["Check your result", "Look at the units, sign, and size. If you get 200 m/s for ordinary walking, check your setup and conversions."]
        ]],
        "For a walker moving steadily at 1.5 m/s for 4.0 s, choose x = x₀ + vt. The displacement is 6.0 m, in the direction of travel.",
        [["Model assumption", "A simplification, such as constant speed or negligible air resistance, that defines when a model applies."]],
        ["Before choosing an equation, what should you do?", ["Round all numbers", "Identify knowns, the target, and model assumptions", "Add every number", "Ignore direction"], 1, "The knowns and assumptions tell you which physical relationships apply."],
        ["A calculation says a person walks 1 km in 5 s. Which check is most useful?", ["Is the implied walking speed plausible?", "Are there at least four significant figures?", "Can both inputs be negative?", "Can the answer be written without units?"], 0, "The implied speed is 200 m/s, far beyond ordinary walking speed."]]
    ]
  },
  {
    title: "Vectors", theme: "peach", sections: [
      ["2.1", "Scalars and Vectors",
        ["Some quantities only need a value. Others need a direction to tell the whole story.", [
          ["Scalar or vector?", "Speed is a scalar, so 5 m/s is enough. Velocity is a vector, so specify a direction, such as 5 m/s east."],
          ["Read an arrow", "The arrow’s length represents magnitude and its tip shows direction. Moving the arrow without rotating or stretching it leaves the vector unchanged."],
          ["Add tail to tip", "Put the tail of the second arrow at the tip of the first. The resultant goes from the starting tail to the final tip. Opposite vectors of equal length cancel."]
        ]],
        "Walk 4 m east, then 3 m north. The resultant displacement has magnitude √(4² + 3²) = 5 m, at about 37° north of east.",
        [["Scalar", "A quantity described without a direction, such as mass or speed."], ["Vector", "A quantity with magnitude and direction, such as displacement."]],
        ["Which quantity is a vector?", ["Time", "Mass", "Speed", "Velocity"], 3, "Velocity includes direction as well as speed."],
        ["What is the magnitude of a 6 m east displacement followed by 6 m west?", ["0 m", "6 m", "12 m", "36 m"], 0, "Equal and opposite displacements sum to the zero vector."]],
      ["2.2", "Coordinate Systems and Components of a Vector",
        ["Components describe how much of a vector points along each coordinate axis.", [
          ["Split into axes", "If θ is measured counterclockwise from +x, use Aₓ = A cos θ and Aᵧ = A sin θ. A negative component points opposite the positive axis."],
          ["Rebuild the vector", "Find magnitude with √(Aₓ² + Aᵧ² + A_z²), dropping the z term in 2D. To recover direction in 2D, check both signs so the angle lands in the right quadrant."],
          ["Use unit vectors", "The symbols î, ĵ, and k̂ point along +x, +y, and +z. For example, 3î − 2ĵ means 3 units right and 2 units down on standard axes."]
        ]],
        "A 10 m vector at 150° has x ≈ −8.66 m and y = +5.00 m. Its signs place it in quadrant II.",
        [["Vector component", "The signed projection of a vector along a coordinate axis."], ["Unit vector", "A vector with magnitude one that specifies a direction."]],
        ["A 12 m vector is at 30° above +x. What is its y component?", ["6 m", "10.4 m", "−6 m", "12 m"], 0, "Aᵧ = 12 sin 30° = 6 m."],
        ["What is the magnitude of the vector (2, −3, 6)?", ["5", "7", "11", "49"], 1, "√(2² + (−3)² + 6²) = √49 = 7."]],
      ["2.3", "Algebra of Vectors",
        ["Once vectors are in components, you can calculate the result one axis at a time.", [
          ["Add or subtract", "Pair x with x, y with y, and z with z. Subtracting B from A is the same as adding a vector that points opposite B."],
          ["Multiply by a scalar", "Multiply every component by the same number. Multiplying by −2 doubles the length and reverses the direction."],
          ["Check order", "A + B equals B + A, but A − B generally differs from B − A. Keep track of which vector you subtract."]
        ]],
        "For A = (4, −1) and B = (2, 3), A − B = (4 − 2, −1 − 3) = (2, −4).",
        [["Resultant", "The single vector obtained by adding two or more vectors."], ["Scalar multiplication", "Scaling each component by the same number. A negative factor reverses direction."]],
        ["Find (3, −2) + (−1, 5).", ["(4, −7)", "(2, 3)", "(2, −7)", "(4, 3)"], 1, "Add x components and y components separately."],
        ["Find −2(1, −4, 0).", ["(−2, −8, 0)", "(2, −8, 0)", "(−2, 8, 0)", "(−1, 2, 0)"], 2, "Multiply each signed component by −2."]],
      ["2.4", "Products of Vectors",
        ["The dot product measures alignment. The cross product gives a vector perpendicular to the two inputs when it is nonzero.", [
          ["Dot product", "Multiply matching components and add them. The result is a scalar equal to AB cos θ. It is zero for perpendicular vectors."],
          ["Cross product", "The magnitude is AB sin θ. Curl your right-hand fingers from A toward B and your thumb gives the direction. Swapping A and B reverses the result."],
          ["Compute components", "The cross product is (AᵧB_z − A_zBᵧ, A_zBₓ − AₓB_z, AₓBᵧ − AᵧBₓ). For two vectors in the xy-plane, only the z component can be nonzero."]
        ]],
        "For A = (3, 0, 0) and B = (0, 4, 0), the dot product is 0 and A × B = (0, 0, 12).",
        [["Dot product", "A scalar equal to AB cos θ, or the sum of matching component products."], ["Cross product", "A vector perpendicular to both inputs, of magnitude AB sin θ and right-hand-rule direction."]],
        ["Find (2, 1, 0) · (3, −2, 4).", ["−4", "0", "4", "8"], 2, "Multiply matching components and sum: 6 − 2 + 0 = 4."],
        ["What is ĵ × î in a right-handed coordinate system?", ["k̂", "−k̂", "ĵ", "0"], 1, "î × ĵ = k̂, and reversing the order reverses the result."]]
    ]
  }
];

chapters.push(
  {
    title: "Motion Along a Straight Line", theme: "gold", sections: [
      ["3.1", "Position, Displacement, and Average Velocity",
        ["Position tells you where you are. Displacement tells you how your position changed.", [
          ["Set an origin and direction", "If right is positive, moving from x = 2 m to x = −1 m gives Δx = −3 m, meaning 3 m left."],
          ["Distance vs. displacement", "Distance adds the length of every leg of a trip. Displacement is final position minus initial position, so returning to the start gives zero displacement."],
          ["Average speed vs. velocity", "Divide distance by elapsed time for average speed. Divide displacement by elapsed time for average velocity. On a position–time graph, average velocity is the slope between the two endpoints."]
        ]],
        "Start at x = 2 m, walk to 9 m, and end at 5 m after 5 s. Displacement is +3 m, distance is 11 m, average velocity is +0.6 m/s, and average speed is 2.2 m/s.",
        [["Displacement", "Final position minus initial position, including direction."], ["Average velocity", "Displacement divided by elapsed time."], ["Average speed", "Total distance divided by elapsed time."]],
        ["A walker goes 7 m east then 3 m west. How far did they travel?", ["4 m", "7 m", "10 m", "21 m"], 2, "Distance adds both path lengths: 7 + 3 = 10 m."],
        ["A cart goes from x = 6 m to x = −2 m in 4 s. What is its average velocity?", ["+2 m/s", "−2 m/s", "−1 m/s", "+1 m/s"], 1, "Use (−2 − 6)/4 = −2 m/s."]],
      ["3.2", "Instantaneous Velocity and Speed",
        ["Instantaneous velocity describes how position is changing at one moment.", [
          ["Read the graph", "Draw a tangent to the position–time curve at the moment you care about. Its slope is instantaneous velocity."],
          ["Use the derivative", "If you know the position formula, calculate v = dx/dt. A positive derivative means motion in +x and a negative one means motion in −x."],
          ["Find speed", "Take the magnitude of velocity. A velocity of −5 m/s means a speed of 5 m/s. A flat tangent means zero velocity at that instant."]
        ]],
        "For x(t) = 6 − 2t² in meters with t in seconds, v(t) = −4t. At 2 s, velocity is −8 m/s and speed is 8 m/s.",
        [["Instantaneous velocity", "The derivative of position with respect to time."], ["Instantaneous speed", "The magnitude of instantaneous velocity."]],
        ["If x(t) = 3t² in SI units, what is v at t = 2 s?", ["3 m/s", "6 m/s", "12 m/s", "24 m/s"], 2, "Differentiate: v(t) = 6t. At 2 s, v = 12 m/s."],
        ["At a point where the position–time graph slopes down at −5 m/s, what is the speed?", ["−5 m/s", "0 m/s", "2.5 m/s", "5 m/s"], 3, "The slope is signed velocity. Speed is its magnitude."]],
      ["3.3", "Average and Instantaneous Acceleration",
        ["Acceleration tells you how quickly velocity changes, including changes in its direction.", [
          ["Average acceleration", "Use Δv/Δt over an interval. Keep signs when subtracting, especially when velocity switches directions."],
          ["Instantaneous acceleration", "Use a = dv/dt. This is the tangent slope on a velocity–time graph and the second derivative of position."],
          ["Speeding up or slowing down?", "In one dimension, velocity and acceleration with the same sign mean the object is speeding up. Opposite signs mean it is slowing down at that moment."]
        ]],
        "A cart moving at −6 m/s has acceleration +2 m/s². Its velocity is negative, so it is moving left, but the positive acceleration makes it slow down at that moment.",
        [["Average acceleration", "Change in velocity divided by elapsed time."], ["Instantaneous acceleration", "The time derivative of velocity, or the second time derivative of position."]],
        ["Velocity goes from −2 to +4 m/s in 3 s. What is average acceleration?", ["+2 m/s²", "−2 m/s²", "+6 m/s²", "−6 m/s²"], 0, "The signed velocity change is +4 − (−2) = +6 m/s. Divide by 3 s."],
        ["An object has v = −4 m/s and a = −2 m/s². What is it doing?", ["Moving right and speeding up", "Moving left and slowing down", "Moving left and speeding up", "Moving left at constant speed"], 2, "Both signs are negative. The object moves left and its velocity becomes more negative."]],
      ["3.4", "Motion with Constant Acceleration",
        ["With constant acceleration, velocity changes by the same amount each second.", [
          ["Need final velocity?", "Use v = v₀ + at. For displacement over a known time, use Δx = v₀t + ½at²."],
          ["Time missing?", "Use v² = v₀² + 2aΔx if the problem connects speed, acceleration, and displacement without giving elapsed time."],
          ["Check the assumptions", "The equations apply over intervals with constant a. In that case, average velocity is (v₀ + v)/2. Keep the signs tied to the axis you chose."]
        ]],
        "A cart starts at +3 m/s and accelerates at +2 m/s² for 4 s. Its final velocity is +11 m/s and displacement is 3(4) + ½(2)(4²) = +28 m.",
        [["Constant acceleration", "Velocity changes by equal amounts over equal time intervals."], ["Time-free kinematics equation", "For constant acceleration, v² = v₀² + 2aΔx."]],
        ["From rest, a cart accelerates at +3 m/s² for 4 s. What is its displacement?", ["+6 m", "+12 m", "+24 m", "+48 m"], 2, "With v₀ = 0, Δx = ½(3)(4²) = 24 m."],
        ["A bicycle moving at +8 m/s brakes at −2 m/s². How far does it travel before stopping?", ["4 m", "8 m", "16 m", "32 m"], 2, "Set v = 0 in v² = v₀² + 2aΔx. Then Δx = −64/(−4) = 16 m."]],
      ["3.5", "Free Fall",
        ["In the free-fall model, gravity is the only force affecting motion.", [
          ["Choose the sign", "Near Earth, g is about 9.8 m/s². If you choose up as positive, vertical acceleration is −g, even while an object is moving upward."],
          ["At the highest point", "A ball thrown straight up has zero velocity for an instant at the top. Its acceleration still points downward, so the ball starts falling."],
          ["Dropped vs. thrown", "A dropped object starts from rest. A thrown object has an initial velocity that you include in the constant-acceleration equations."]
        ]],
        "Drop an object from rest. After 2.0 s, its velocity is −19.6 m/s and its displacement is −19.6 m if up is positive.",
        [["Free fall", "Motion under gravity alone, with air resistance neglected in this model."], ["g", "The positive magnitude of gravitational acceleration, about 9.8 m/s² near Earth."]],
        ["What is a ball’s acceleration at the top of a straight-up throw, with air resistance ignored?", ["Zero", "9.8 m/s² upward", "9.8 m/s² downward", "It depends on the launch speed"], 2, "The velocity is momentarily zero, but gravity still accelerates the ball downward."],
        ["A ball is thrown straight up at 19.6 m/s. How long until it reaches its highest point?", ["1.0 s", "2.0 s", "4.0 s", "9.8 s"], 1, "At the top v = 0, so 0 = 19.6 − 9.8t and t = 2.0 s."]],
      ["3.6", "Finding Velocity and Displacement from Acceleration",
        ["When acceleration varies, integrate to find how much velocity changes over an interval.", [
          ["Acceleration to velocity", "Add the signed area under the acceleration–time graph to the initial velocity. In symbols, v(t) = v(t₀) + ∫ a(s) ds from t₀ to t."],
          ["Velocity to position", "Add the signed area under the velocity–time graph to the initial position. In symbols, x(t) = x(t₀) + ∫ v(s) ds over the same interval."],
          ["Distance needs a different area", "Area below the time axis subtracts from displacement. For distance, count both forward and backward legs as positive by integrating |v|."]
        ]],
        "If a(t) = 6t, v(0) = 2, and x(0) = 1 in SI units, then v(t) = 2 + 3t² and x(t) = 1 + 2t + t³.",
        [["Area under an acceleration–time graph", "The signed area gives change in velocity."], ["Area under a velocity–time graph", "The signed area gives displacement."]],
        ["If a(t) = 4t in SI units and v(0) = 1 m/s, what is v(2 s)?", ["5 m/s", "8 m/s", "9 m/s", "17 m/s"], 2, "Integrating 4t gives 2t². Add initial velocity: 1 + 2(2²) = 9 m/s."],
        ["A cart moves at −3 m/s for 2 s and +2 m/s for 4 s. What is its displacement?", ["−14 m", "−2 m", "+2 m", "+14 m"], 2, "Add the signed velocity–time areas: (−3)(2) + (2)(4) = +2 m."]]
    ]
  },
  {
    title: "Motion in Two and Three Dimensions", theme: "blue", sections: [
      ["4.1", "Displacement and Velocity Vectors",
        ["In two or three dimensions, position and velocity each need a component for every axis.", [
          ["Position and displacement", "The position vector points from the origin to the object. To find displacement, subtract the initial coordinates from the final coordinates."],
          ["Average and instantaneous velocity", "Divide displacement by elapsed time for average velocity. Differentiate each position component for instantaneous velocity."],
          ["Direction and speed", "When velocity is nonzero, it points along the tangent to the path. Find speed by taking the magnitude of the velocity vector."]
        ]],
        "If r(t) = (3t, t², 2) in SI units, then v(t) = (3, 2t, 0). At 2 s, speed is √(3² + 4²) = 5 m/s.",
        [["Position vector", "The vector from the coordinate origin to an object's location."], ["Velocity vector", "The componentwise time derivative of position, tangent to the path when nonzero."]],
        ["Find displacement from (1, 2, 3) m to (4, 2, 1) m.", ["(3, 0, −2) m", "(5, 4, 4) m", "(−3, 0, 2) m", "(3, 0, 2) m"], 0, "Subtract the initial coordinate from the final coordinate on each axis."],
        ["If r(t) = (2t², 3t, 0) in SI units, what is v at 1 s?", ["(2, 3, 0) m/s", "(4, 3, 0) m/s", "(4, 0, 0) m/s", "(4, 6, 0) m/s"], 1, "Differentiate each component to get (4t, 3, 0)."]],
      ["4.2", "Acceleration Vector",
        ["An acceleration vector can make an object speed up, slow down, or turn.", [
          ["Find the vector", "For average acceleration, subtract the initial velocity vector from the final one and divide by elapsed time. For instantaneous acceleration, differentiate each velocity component."],
          ["Separate the effects", "The component along velocity changes speed. The component perpendicular to velocity changes the direction at that instant."],
          ["Watch for turning", "An object can accelerate even at constant speed. For example, a car going around a curve at steady speed still changes its velocity direction."]
        ]],
        "For v(t) = (2t, 3t², 4) in SI units, a(t) = (2, 6t, 0). At t = 1 s, a = (2, 6, 0) m/s².",
        [["Acceleration vector", "The rate of change of the velocity vector, including changes in direction."], ["Perpendicular acceleration", "The component of acceleration perpendicular to velocity, which turns the velocity without changing speed at that instant."]],
        ["Velocity changes from (2, 0) to (2, 6) m/s over 3 s. What is average acceleration?", ["(2, 2) m/s²", "(0, 2) m/s²", "(0, 6) m/s²", "(2, 0) m/s²"], 1, "Subtract velocities to get (0, 6) m/s, then divide both components by 3 s."],
        ["At an instant, velocity is east and acceleration is north. What happens at that instant?", ["Speed increases", "Speed decreases", "Velocity changes direction with zero instantaneous change in speed", "Velocity is constant"], 2, "A perpendicular acceleration changes velocity’s direction. Its component along velocity is zero."]],
      ["4.3", "Projectile Motion",
        ["With air resistance ignored, a projectile’s sideways and vertical motions share a clock.", [
          ["Split the launch velocity", "For launch angle θ above +x, use v₀ₓ = v₀ cos θ and v₀ᵧ = v₀ sin θ. The x component stays constant, while the y component changes by −gt if up is positive."],
          ["Find the time first", "Use Δy = v₀ᵧt − ½gt² to find when the projectile hits the target height. Use that same t in Δx = v₀ₓt."],
          ["Check the landing height", "Only when launch and landing heights match can you use flight time 2v₀ᵧ/g and range v₀² sin(2θ)/g for an upward launch. At the peak, vertical velocity is zero while gravity still acts."]
        ]],
        "Launch horizontally at 6 m/s from 19.6 m above ground. Solve 19.6 = ½(9.8)t² to get 2.0 s of flight, then multiply 6 × 2.0 = 12 m horizontally.",
        [["Projectile motion", "Motion under gravity after launch, treating horizontal and vertical motion separately when drag is ignored."], ["Range", "The horizontal distance from launch to landing."]],
        ["A ball is launched at an angle above horizontal. At the peak, which velocity component must be zero?", ["Horizontal", "Vertical", "Both", "Neither"], 1, "The vertical component changes sign at the peak. With no drag, the horizontal component stays constant."],
        ["A ball returns to its launch height. Its initial components are 8 m/s horizontal and 10 m/s upward. Use g = 10 m/s². What is its range?", ["8 m", "10 m", "16 m", "20 m"], 2, "Time up is 10/10 = 1 s and total time is 2 s. Range is 8 × 2 = 16 m."]],
      ["4.4", "Uniform and Nonuniform Circular Motion",
        ["Circular motion always involves a change in velocity direction. Speed can change too.", [
          ["Inward acceleration", "Velocity points along the tangent. The inward acceleration has magnitude v²/r and turns the velocity toward the center of the circle."],
          ["Uniform motion", "At constant angular velocity ω, θ = θ₀ + ωt, speed is r|ω|, and one lap takes 2π/|ω|. With the center at the origin, position is (r cos θ, r sin θ), and acceleration equals −ω² times the position vector."],
          ["Nonuniform motion", "If speed changes, add a tangential component aₜ = dv/dt, where v is speed. It points backward when the object slows down. The total magnitude is √(a_c² + aₜ²) because the two components are perpendicular."]
        ]],
        "A rider moves at 6 m/s on a 9 m radius path and speeds up at 3 m/s². Inward acceleration is 36/9 = 4 m/s². The total acceleration has magnitude √(4² + 3²) = 5 m/s².",
        [["Centripetal acceleration", "Inward acceleration that turns velocity along a circular path, with magnitude v²/r."], ["Tangential acceleration", "The component of acceleration along the path that changes speed."], ["Period", "Time for one complete revolution."]],
        ["A cart circles at 4 m/s on a path of radius 2 m. Find its centripetal acceleration.", ["2 m/s²", "4 m/s²", "8 m/s²", "16 m/s²"], 2, "Use v²/r = 4²/2 = 8 m/s², directed inward."],
        ["A car slows down as it rounds a circular bend. Which accelerations does it have?", ["Only inward", "Only tangent and forward", "Inward and tangent backward", "Outward and tangent backward"], 2, "The inward component turns the car. The backward tangential component reduces its speed."]],
      ["4.5", "Relative Motion in One and Two Dimensions",
        ["A passenger, a train, and an observer standing on the ground can describe the same motion with different velocities.", [
          ["Label the reference frames", "Use v_AB for the velocity of A as seen by B. Switching the object and observer reverses the velocity: v_BA = −v_AB."],
          ["Connect the frames", "Use v_AC = v_AB + v_BC. In 1D, choose a positive direction and keep the signs. In 2D, add x and y separately."],
          ["Compare accelerations", "If two frames move at constant velocity relative to each other, the difference between their velocity measurements stays constant, so they measure the same acceleration."]
        ]],
        "A boat moves 3 m/s north relative to water flowing 4 m/s east relative to shore. Its shore-frame velocity is (4 east, 3 north) m/s, with speed 5 m/s.",
        [["Reference frame", "The coordinate system and viewpoint from which motion is measured."], ["Relative velocity", "Velocity of one object measured in another object's frame."]],
        ["A passenger walks 2 m/s west relative to a train traveling 12 m/s east. What is the passenger’s ground velocity?", ["14 m/s east", "10 m/s east", "10 m/s west", "2 m/s west"], 1, "Taking east as positive gives −2 + 12 = +10 m/s."],
        ["A plane flies 60 m/s north relative to air. Wind moves 25 m/s east relative to ground. What is its ground speed?", ["35 m/s", "60 m/s", "65 m/s", "85 m/s"], 2, "The ground components are perpendicular, so the speed is √(60² + 25²) = 65 m/s."]]
    ]
  }
);

const units = [
  ...chapters.map((chapter, index) => ({
    ...chapter,
    label: ["Measurement", "Vectors", "1D Motion", "2D & 3D Motion"][index],
    concepts: chapter.sections.flatMap(section => section[4]),
    practice: chapter.sections.map(section => section[5]),
    quiz: chapter.sections.map(section => section[6])
  })),
  ...bonusUnits
];
