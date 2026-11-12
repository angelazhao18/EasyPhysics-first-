// TODO: separate lessons, practice, flashcards, & concepts into their own arrays (maybe?)

// Each section includes a lesson, a worked example, recall cards, and two distinct checks.
const chapters = [
  {
    title: "Units and Measurement",
    theme: "mint",
    label: "Measurement"
  },
  {
    title: "Vectors",
    theme: "peach",
    label: "Vectors"
  },
  {
    title: "Motion Along a Straight Line",
    theme: "gold",
    label: "1D Motion"
  },
  {
    title: "Motion in Two and Three Dimensions",
    theme: "blue",
    label: "2D & 3D Motion"
  }
];

const lessonsByChapter = [
  [
    // Chapter 1 — Units and Measurement
    {
      number: "1.1",
      title: "The Scope and Scale of Physics",
      intro: "Physics builds explanations that can be checked against measurements, from the size of a cell to the motion of a galaxy.",
      example: "A cell 0.000008 m across is 8 × 10⁻⁶ m. Its order of magnitude is 10⁻⁵ m because 8 is greater than √10."
    },
    {
      number: "1.2",
      title: "Units and Standards",
      intro: "A measurement needs both a number and a unit. The number tells you how many copies of the unit fit into the quantity.",
      example: "A measurement of 45 μs is 45 × 10⁻⁶ s = 4.5 × 10⁻⁵ s."
    },
    {
      number: "1.3",
      title: "Unit Conversion",
      intro: "A conversion changes the unit used to describe a quantity. The physical amount stays the same.",
      example: "Convert 72 km/h: 72 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 20 m/s."
    },
    {
      number: "1.4",
      title: "Dimensional Analysis",
      intro: "Dimensional analysis checks whether an equation could make sense before you plug in numbers.",
      example: "If x = ½at², then [at²] = (L/T²)T² = L, which matches position."
    },
    {
      number: "1.5",
      title: "Estimates and Fermi Calculations",
      intro: "A Fermi estimate gives you a reasonable scale when you have limited information.",
      example: "Estimate 200 students × 3 bottles per student per week × 30 school weeks ≈ 18,000 bottles, or roughly 2 × 10⁴ bottles."
    },
    {
      number: "1.6",
      title: "Significant Figures",
      intro: "Your final number should reflect how precisely you measured it.",
      example: "2.4 m × 1.35 m = 3.24 m² before rounding. With two significant figures, report 3.2 m²."
    },
    {
      number: "1.7",
      title: "Solving Problems in Physics",
      intro: "Use a repeatable plan so you can spend less time guessing which equation fits.",
      example: "For a walker moving steadily at 1.5 m/s for 4.0 s, choose x = x₀ + vt. The displacement is 6.0 m, in the direction of travel."
    }
  ],
  [
    // Chapter 2 — Vectors
    {
      number: "2.1",
      title: "Scalars and Vectors",
      intro: "Some quantities only need a value. Others need a direction to tell the whole story.",
      example: "Walk 4 m east, then 3 m north. The resultant displacement has magnitude √(4² + 3²) = 5 m, at about 37° north of east."
    },
    {
      number: "2.2",
      title: "Coordinate Systems and Components of a Vector",
      intro: "Components describe how much of a vector points along each coordinate axis.",
      example: "A 10 m vector at 150° has x ≈ −8.66 m and y = +5.00 m. Its signs place it in quadrant II."
    },
    {
      number: "2.3",
      title: "Algebra of Vectors",
      intro: "Once vectors are in components, you can calculate the result one axis at a time.",
      example: "For A = (4, −1) and B = (2, 3), A − B = (4 − 2, −1 − 3) = (2, −4)."
    },
    {
      number: "2.4",
      title: "Products of Vectors",
      intro: "The dot product measures alignment. The cross product gives a vector perpendicular to the two inputs when it is nonzero.",
      example: "For A = (3, 0, 0) and B = (0, 4, 0), the dot product is 0 and A × B = (0, 0, 12)."
    }
  ],
  [
    // Chapter 3 — Motion Along a Straight Line
    {
      number: "3.1",
      title: "Position, Displacement, and Average Velocity",
      intro: "Position tells you where you are. Displacement tells you how your position changed.",
      example: "Start at x = 2 m, walk to 9 m, and end at 5 m after 5 s. Displacement is +3 m, distance is 11 m, average velocity is +0.6 m/s, and average speed is 2.2 m/s."
    },
    {
      number: "3.2",
      title: "Instantaneous Velocity and Speed",
      intro: "Instantaneous velocity describes how position is changing at one moment.",
      example: "For x(t) = 6 − 2t² in meters with t in seconds, v(t) = −4t. At 2 s, velocity is −8 m/s and speed is 8 m/s."
    },
    {
      number: "3.3",
      title: "Average and Instantaneous Acceleration",
      intro: "Acceleration tells you how quickly velocity changes, including changes in its direction.",
      example: "A cart moving at −6 m/s has acceleration +2 m/s². Its velocity is negative, so it is moving left, but the positive acceleration makes it slow down at that moment."
    },
    {
      number: "3.4",
      title: "Motion with Constant Acceleration",
      intro: "With constant acceleration, velocity changes by the same amount each second.",
      example: "A cart starts at +3 m/s and accelerates at +2 m/s² for 4 s. Its final velocity is +11 m/s and displacement is 3(4) + ½(2)(4²) = +28 m."
    },
    {
      number: "3.5",
      title: "Free Fall",
      intro: "In the free-fall model, gravity is the only force affecting motion.",
      example: "Drop an object from rest. After 2.0 s, its velocity is −19.6 m/s and its displacement is −19.6 m if up is positive."
    },
    {
      number: "3.6",
      title: "Finding Velocity and Displacement from Acceleration",
      intro: "When acceleration varies, integrate to find how much velocity changes over an interval.",
      example: "If a(t) = 6t, v(0) = 2, and x(0) = 1 in SI units, then v(t) = 2 + 3t² and x(t) = 1 + 2t + t³."
    }
  ],
  [
    // Chapter 4 — Motion in Two and Three Dimensions

    {
      number: "4.1",
      title: "Displacement and Velocity Vectors",
      intro: "In two or three dimensions, position and velocity each need a component for every axis.",
      example: "If r(t) = (3t, t², 2) in SI units, then v(t) = (3, 2t, 0). At 2 s, speed is √(3² + 4²) = 5 m/s."
    },
    {
      number: "4.2",
      title: "Acceleration Vector",
      intro: "An acceleration vector can make an object speed up, slow down, or turn.",
      example: "For v(t) = (2t, 3t², 4) in SI units, a(t) = (2, 6t, 0). At t = 1 s, a = (2, 6, 0) m/s²."
    },
    {
      number: "4.3",
      title: "Projectile Motion",
      intro: "With air resistance ignored, a projectile’s sideways and vertical motions share a clock.",
      example: "Launch horizontally at 6 m/s from 19.6 m above ground. Solve 19.6 = ½(9.8)t² to get 2.0 s of flight, then multiply 6 × 2.0 = 12 m horizontally."
    },
    {
      number: "4.4",
      title: "Uniform and Nonuniform Circular Motion",
      intro: "Circular motion always involves a change in velocity direction. Speed can change too.",
      example: "A rider moves at 6 m/s on a 9 m radius path and speeds up at 3 m/s². Inward acceleration is 36/9 = 4 m/s². The total acceleration has magnitude √(4² + 3²) = 5 m/s²."
    },
    {
      number: "4.5",
      title: "Relative Motion in One and Two Dimensions",
      intro: "A passenger, a train, and an observer standing on the ground can describe the same motion with different velocities.",
      example: "A boat moves 3 m/s north relative to water flowing 4 m/s east relative to shore. Its shore-frame velocity is (4 east, 3 north) m/s, with speed 5 m/s."
    }
  ]
];

// Concept explanations.
// Each concept is [bullet heading, explanation].

const conceptsBySection = [
  [
    // Chapter 1

    [
      // 1.1
      [
        "Models, laws, and theories",
        "A model simplifies a situation, such as treating a ball as a point. A law describes a pattern, while a theory explains a range of observations."
      ],
      [
        "Scientific notation",
        "Write a positive measurement as a number from 1 up to 10 multiplied by a power of ten. A negative exponent makes the number smaller, as in 3 × 10⁻⁴ m."
      ],
      [
        "Order of magnitude",
        "This is the nearest power of ten on a logarithmic scale. For a coefficient above √10 (about 3.16), round the power up. A difference of two orders of magnitude means a factor of about 100."
      ]
    ],
    [
      // 1.2
      [
        "SI base units",
        "SI uses the meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), and candela (cd). Most motion problems need just meters and seconds."
      ],
      [
        "Derived units",
        "Combine base units the same way you combine the quantities. Speed is distance divided by time, so its SI unit is m/s. Acceleration is velocity divided by time, so its unit is m/s²."
      ],
      [
        "Metric prefixes",
        "Kilo means 10³, centi means 10⁻², milli means 10⁻³, micro means 10⁻⁶, and nano means 10⁻⁹. For example, 1 mm is 0.001 m."
      ]
    ],
    [
      // 1.3
      [
        "Choose a factor",
        "Because 1 km and 1000 m are equal, the ratio (1000 m)/(1 km) equals one. Multiply by it to turn kilometers into meters."
      ],
      [
        "Cancel units",
        "Place the unit you want to remove on the opposite side of the fraction. In km/h, hours are already in the denominator, so use (1 h)/(3600 s) to cancel them."
      ],
      [
        "Handle powers",
        "Square the whole conversion factor for area and cube it for volume. Since 1 m = 100 cm, 1 m² = 100² cm²."
      ]
    ],
    [
      // 1.4
      [
        "Dimensions vs. units",
        "A dimension is the kind of quantity being measured. A meter and a centimeter are different units for the same dimension, length (L)."
      ],
      [
        "Check the algebra",
        "Use L for length, M for mass, and T for time. Velocity has dimension L/T and acceleration has L/T². You can add or equate terms only when their dimensions match."
      ],
      [
        "Know what the check can tell you",
        "Both at² and ½at² have dimensions of length. The check catches incompatible units but cannot decide which numerical factor is correct. Inputs to sin, cos, exp, and log must be dimensionless."
      ]
    ],
    [
      // 1.5
      [
        "Break down the question",
        "To estimate bottles used in a school year, estimate students, bottles per student per week, and weeks of school."
      ],
      [
        "Write your assumptions",
        "Use round numbers you can explain. Carry the units so you can see that students and weeks cancel, leaving bottles."
      ],
      [
        "Test the estimate",
        "Change an uncertain input and see how much the result moves. If you double bottles per student, the total doubles, so that assumption matters."
      ]
    ],
    [
      // 1.6
      [
        "Accuracy, precision, and uncertainty",
        "Accuracy is closeness to a reference value. Precision is how closely repeated readings agree or how finely a value is resolved. If known, report uncertainty, such as 2.40 ± 0.02 m."
      ],
      [
        "Count significant digits",
        "Ignore leading zeros. Zeros between nonzero digits count, as do trailing zeros after a decimal point. For example, 0.00450 has three significant figures."
      ],
      [
        "Round at the end",
        "For multiplication or division, match the fewest significant figures. For addition or subtraction, match the least precise decimal place. Exact counts and defined conversions do not limit precision."
      ]
    ],
    [
      // 1.7
      [
        "Set up the situation",
        "List the known quantities and what you need to find. Sketch the motion, choose a positive direction, and convert to compatible units."
      ],
      [
        "Choose a model",
        "State the assumptions before choosing a formula. For instance, use constant-acceleration equations only if acceleration stays constant over the interval."
      ],
      [
        "Check your result",
        "Look at the units, sign, and size. If you get 200 m/s for ordinary walking, check your setup and conversions."
      ]
    ]
  ],
  [
    // Chapter 2

    [
      // 2.1
      [
        "Scalar or vector?",
        "Speed is a scalar, so 5 m/s is enough. Velocity is a vector, so specify a direction, such as 5 m/s east."
      ],
      [
        "Read an arrow",
        "The arrow’s length represents magnitude and its tip shows direction. Moving the arrow without rotating or stretching it leaves the vector unchanged."
      ],
      [
        "Add tail to tip",
        "Put the tail of the second arrow at the tip of the first. The resultant goes from the starting tail to the final tip. Opposite vectors of equal length cancel."
      ]
    ],
    [
      // 2.2
      [
        "Split into axes",
        "If θ is measured counterclockwise from +x, use Aₓ = A cos θ and Aᵧ = A sin θ. A negative component points opposite the positive axis."
      ],
      [
        "Rebuild the vector",
        "Find magnitude with √(Aₓ² + Aᵧ² + A_z²), dropping the z term in 2D. To recover direction in 2D, check both signs so the angle lands in the right quadrant."
      ],
      [
        "Use unit vectors",
        "The symbols î, ĵ, and k̂ point along +x, +y, and +z. For example, 3î − 2ĵ means 3 units right and 2 units down on standard axes."
      ]
    ],
    [
      // 2.3
      [
        "Add or subtract",
        "Pair x with x, y with y, and z with z. Subtracting B from A is the same as adding a vector that points opposite B."
      ],
      [
        "Multiply by a scalar",
        "Multiply every component by the same number. Multiplying by −2 doubles the length and reverses the direction."
      ],
      [
        "Check order",
        "A + B equals B + A, but A − B generally differs from B − A. Keep track of which vector you subtract."
      ]
    ],
    [
      // 2.4
      [
        "Dot product",
        "Multiply matching components and add them. The result is a scalar equal to AB cos θ. It is zero for perpendicular vectors."
      ],
      [
        "Cross product",
        "The magnitude is AB sin θ. Curl your right-hand fingers from A toward B and your thumb gives the direction. Swapping A and B reverses the result."
      ],
      [
        "Compute components",
        "The cross product is (AᵧB_z − A_zBᵧ, A_zBₓ − AₓB_z, AₓBᵧ − AᵧBₓ). For two vectors in the xy-plane, only the z component can be nonzero."
      ]
    ]
  ],
  [
    // Chapter 3

    [
      // 3.1
      [
        "Set an origin and direction",
        "If right is positive, moving from x = 2 m to x = −1 m gives Δx = −3 m, meaning 3 m left."
      ],
      [
        "Distance vs. displacement",
        "Distance adds the length of every leg of a trip. Displacement is final position minus initial position, so returning to the start gives zero displacement."
      ],
      [
        "Average speed vs. velocity",
        "Divide distance by elapsed time for average speed. Divide displacement by elapsed time for average velocity. On a position–time graph, average velocity is the slope between the two endpoints."
      ]
    ],
    [
      // 3.2
      [
        "Read the graph",
        "Draw a tangent to the position–time curve at the moment you care about. Its slope is instantaneous velocity."
      ],
      [
        "Use the derivative",
        "If you know the position formula, calculate v = dx/dt. A positive derivative means motion in +x and a negative one means motion in −x."
      ],
      [
        "Find speed",
        "Take the magnitude of velocity. A velocity of −5 m/s means a speed of 5 m/s. A flat tangent means zero velocity at that instant."
      ]
    ],
    [
      // 3.3
      [
        "Average acceleration",
        "Use Δv/Δt over an interval. Keep signs when subtracting, especially when velocity switches directions."
      ],
      [
        "Instantaneous acceleration",
        "Use a = dv/dt. This is the tangent slope on a velocity–time graph and the second derivative of position."
      ],
      [
        "Speeding up or slowing down?",
        "In one dimension, velocity and acceleration with the same sign mean the object is speeding up. Opposite signs mean it is slowing down at that moment."
      ]
    ],
    [
      // 3.4
      [
        "Need final velocity?",
        "Use v = v₀ + at. For displacement over a known time, use Δx = v₀t + ½at²."
      ],
      [
        "Time missing?",
        "Use v² = v₀² + 2aΔx if the problem connects speed, acceleration, and displacement without giving elapsed time."
      ],
      [
        "Check the assumptions",
        "The equations apply over intervals with constant a. In that case, average velocity is (v₀ + v)/2. Keep the signs tied to the axis you chose."
      ]
    ],
    [
      // 3.5
      [
        "Choose the sign",
        "Near Earth, g is about 9.8 m/s². If you choose up as positive, vertical acceleration is −g, even while an object is moving upward."
      ],
      [
        "At the highest point",
        "A ball thrown straight up has zero velocity for an instant at the top. Its acceleration still points downward, so the ball starts falling."
      ],
      [
        "Dropped vs. thrown",
        "A dropped object starts from rest. A thrown object has an initial velocity that you include in the constant-acceleration equations."
      ]
    ],
    [
      // 3.6
      [
        "Acceleration to velocity",
        "Add the signed area under the acceleration–time graph to the initial velocity. In symbols, v(t) = v(t₀) + ∫ a(s) ds from t₀ to t."
      ],
      [
        "Velocity to position",
        "Add the signed area under the velocity–time graph to the initial position. In symbols, x(t) = x(t₀) + ∫ v(s) ds over the same interval."
      ],
      [
        "Distance needs a different area",
        "Area below the time axis subtracts from displacement. For distance, count both forward and backward legs as positive by integrating |v|."
      ]
    ]
  ],
  [
    // Chapter 4

    [
      // 4.1
      [
        "Position and displacement",
        "The position vector points from the origin to the object. To find displacement, subtract the initial coordinates from the final coordinates."
      ],
      [
        "Average and instantaneous velocity",
        "Divide displacement by elapsed time for average velocity. Differentiate each position component for instantaneous velocity."
      ],
      [
        "Direction and speed",
        "When velocity is nonzero, it points along the tangent to the path. Find speed by taking the magnitude of the velocity vector."
      ]
    ],
    [
      // 4.2
      [
        "Find the vector",
        "For average acceleration, subtract the initial velocity vector from the final one and divide by elapsed time. For instantaneous acceleration, differentiate each velocity component."
      ],
      [
        "Separate the effects",
        "The component along velocity changes speed. The component perpendicular to velocity changes the direction at that instant."
      ],
      [
        "Watch for turning",
        "An object can accelerate even at constant speed. For example, a car going around a curve at steady speed still changes its velocity direction."
      ]
    ],
    [
      // 4.3
      [
        "Split the launch velocity",
        "For launch angle θ above +x, use v₀ₓ = v₀ cos θ and v₀ᵧ = v₀ sin θ. The x component stays constant, while the y component changes by −gt if up is positive."
      ],
      [
        "Find the time first",
        "Use Δy = v₀ᵧt − ½gt² to find when the projectile hits the target height. Use that same t in Δx = v₀ₓt."
      ],
      [
        "Check the landing height",
        "Only when launch and landing heights match can you use flight time 2v₀ᵧ/g and range v₀² sin(2θ)/g for an upward launch. At the peak, vertical velocity is zero while gravity still acts."
      ]
    ],
    [
      // 4.4
      [
        "Inward acceleration",
        "Velocity points along the tangent. The inward acceleration has magnitude v²/r and turns the velocity toward the center of the circle."
      ],
      [
        "Uniform motion",
        "At constant angular velocity ω, θ = θ₀ + ωt, speed is r|ω|, and one lap takes 2π/|ω|. With the center at the origin, position is (r cos θ, r sin θ), and acceleration equals −ω² times the position vector."
      ],
      [
        "Nonuniform motion",
        "If speed changes, add a tangential component aₜ = dv/dt, where v is speed. It points backward when the object slows down. The total magnitude is √(a_c² + aₜ²) because the two components are perpendicular."
      ]
    ],
    [
      // 4.5
      [
        "Label the reference frames",
        "Use v_AB for the velocity of A as seen by B. Switching the object and observer reverses the velocity: v_BA = −v_AB."
      ],
      [
        "Connect the frames",
        "Use v_AC = v_AB + v_BC. In 1D, choose a positive direction and keep the signs. In 2D, add x and y separately."
      ],
      [
        "Compare accelerations",
        "If two frames move at constant velocity relative to each other, the difference between their velocity measurements stays constant, so they measure the same acceleration."
      ]
    ]
  ]
];

// Flashcards.
// Each card is [term, definition].

const flashcardsBySection = [
  [
    // Chapter 1

    [
      ["Scientific notation", "A number written as a coefficient times a power of ten."],
      ["Order of magnitude", "The nearest power of ten on a logarithmic scale."]
    ],
    [
      ["SI base unit", "A reference unit for a base quantity, such as the meter for length."],
      ["Derived unit", "A unit formed by combining base units, such as m/s for speed."]
    ],
    [
      ["Conversion factor", "A ratio of equivalent quantities that changes units while preserving the physical amount."]
    ],
    [
      ["Dimension", "The type of physical quantity expressed using base dimensions such as L, M, and T."],
      ["Dimensional consistency", "The requirement that both sides of an equation and all added terms have matching dimensions."]
    ],
    [
      ["Fermi estimate", "A rough calculation built from simpler estimates and stated assumptions."]
    ],
    [
      ["Accuracy", "Closeness to a reference or accepted value."],
      ["Precision", "How closely repeated measurements agree, or how finely a value is resolved."],
      ["Significant figures", "The reported digits that convey a measurement’s precision."]
    ],
    [
      ["Model assumption", "A simplification, such as constant speed or negligible air resistance, that defines when a model applies."]
    ]
  ],
  [
    // Chapter 2

    [
      ["Scalar", "A quantity described without a direction, such as mass or speed."],
      ["Vector", "A quantity with magnitude and direction, such as displacement."]
    ],
    [
      ["Vector component", "The signed projection of a vector along a coordinate axis."],
      ["Unit vector", "A vector with magnitude one that specifies a direction."]
    ],
    [
      ["Resultant", "The single vector obtained by adding two or more vectors."],
      ["Scalar multiplication", "Scaling each component by the same number. A negative factor reverses direction."]
    ],
    [
      ["Dot product", "A scalar equal to AB cos θ, or the sum of matching component products."],
      ["Cross product", "A vector perpendicular to both inputs, of magnitude AB sin θ and right-hand-rule direction."]
    ]
  ],
  [
    // Chapter 3

    [
      ["Displacement", "Final position minus initial position, including direction."],
      ["Average velocity", "Displacement divided by elapsed time."],
      ["Average speed", "Total distance divided by elapsed time."]
    ],
    [
      ["Instantaneous velocity", "The derivative of position with respect to time."],
      ["Instantaneous speed", "The magnitude of instantaneous velocity."]
    ],
    [
      ["Average acceleration", "Change in velocity divided by elapsed time."],
      ["Instantaneous acceleration", "The time derivative of velocity, or the second time derivative of position."]
    ],
    [
      ["Constant acceleration", "Velocity changes by equal amounts over equal time intervals."],
      ["Time-free kinematics equation", "For constant acceleration, v² = v₀² + 2aΔx."]
    ],
    [
      ["Free fall", "Motion under gravity alone, with air resistance neglected in this model."],
      ["g", "The positive magnitude of gravitational acceleration, about 9.8 m/s² near Earth."]
    ],
    [
      ["Area under an acceleration–time graph", "The signed area gives change in velocity."],
      ["Area under a velocity–time graph", "The signed area gives displacement."]
    ]
  ],
  [
    // Chapter 4

    [
      ["Position vector", "The vector from the coordinate origin to an object's location."],
      ["Velocity vector", "The componentwise time derivative of position, tangent to the path when nonzero."]
    ],
    [
      ["Acceleration vector", "The rate of change of the velocity vector, including changes in direction."],
      ["Perpendicular acceleration", "The component of acceleration perpendicular to velocity, which turns the velocity without changing speed at that instant."]
    ],
    [
      ["Projectile motion", "Motion under gravity after launch, treating horizontal and vertical motion separately when drag is ignored."],
      ["Range", "The horizontal distance from launch to landing."]
    ],
    [
      ["Centripetal acceleration", "Inward acceleration that turns velocity along a circular path, with magnitude v²/r."],
      ["Tangential acceleration", "The component of acceleration along the path that changes speed."],
      ["Period", "Time for one complete revolution."]
    ],
    [
      ["Reference frame", "The coordinate system and viewpoint from which motion is measured."],
      ["Relative velocity", "Velocity of one object measured in another object's frame."]
    ]
  ]
];

// Questions use this structure:
// [prompt, choices, correct choice index, explanation]
//
// Correct choice indexes start at 0.
// 0 = first option, 1 = second, 2 = third, 3 = fourth.

const practiceByChapter = [
  [
    // Chapter 1

    [
      "Write 0.00032 m in scientific notation.",
      ["3.2 × 10⁻⁴ m", "3.2 × 10⁻³ m", "3.2 × 10⁴ m", "32 × 10⁻⁴ m"],
      0,
      "Moving the decimal four places right gives 3.2, so multiply by 10⁻⁴."
    ],
    [
      "What is the SI base unit of mass?",
      ["Gram", "Newton", "Kilogram", "Pound"],
      2,
      "The kilogram is the SI base unit of mass."
    ],
    [
      "Convert 90 km/h to m/s.",
      ["9 m/s", "25 m/s", "32.4 m/s", "324 m/s"],
      1,
      "Multiply by 1000/3600, giving 90/3.6 = 25 m/s."
    ],
    [
      "What are the dimensions of acceleration?",
      ["L/T", "L/T²", "LT²", "T/L"],
      1,
      "Acceleration is velocity divided by time, so its dimensions are (L/T)/T."
    ],
    [
      "A student reads about 20 pages a day for 250 days. Estimate the total.",
      ["500", "2,000", "5,000", "50,000"],
      2,
      "Multiply 20 pages/day by 250 days to get about 5,000 pages."
    ],
    [
      "How many significant figures are in 0.00450?",
      ["2", "3", "4", "5"],
      1,
      "Leading zeros only locate the decimal. The digits 4, 5, and the final zero count."
    ],
    [
      "Before choosing an equation, what should you do?",
      [
        "Round all numbers",
        "Identify knowns, the target, and model assumptions",
        "Add every number",
        "Ignore direction"
      ],
      1,
      "The knowns and assumptions tell you which physical relationships apply."
    ]
  ],
  [
    // Chapter 2

    [
      "Which quantity is a vector?",
      ["Time", "Mass", "Speed", "Velocity"],
      3,
      "Velocity includes direction as well as speed."
    ],
    [
      "A 12 m vector is at 30° above +x. What is its y component?",
      ["6 m", "10.4 m", "−6 m", "12 m"],
      0,
      "Aᵧ = 12 sin 30° = 6 m."
    ],
    [
      "Find (3, −2) + (−1, 5).",
      ["(4, −7)", "(2, 3)", "(2, −7)", "(4, 3)"],
      1,
      "Add x components and y components separately."
    ],
    [
      "Find (2, 1, 0) · (3, −2, 4).",
      ["−4", "0", "4", "8"],
      2,
      "Multiply matching components and sum: 6 − 2 + 0 = 4."
    ]
  ],
  [
    // Chapter 3

    [
      "A walker goes 7 m east then 3 m west. How far did they travel?",
      ["4 m", "7 m", "10 m", "21 m"],
      2,
      "Distance adds both path lengths: 7 + 3 = 10 m."
    ],
    [
      "If x(t) = 3t² in SI units, what is v at t = 2 s?",
      ["3 m/s", "6 m/s", "12 m/s", "24 m/s"],
      2,
      "Differentiate: v(t) = 6t. At 2 s, v = 12 m/s."
    ],
    [
      "Velocity goes from −2 to +4 m/s in 3 s. What is average acceleration?",
      ["+2 m/s²", "−2 m/s²", "+6 m/s²", "−6 m/s²"],
      0,
      "The signed velocity change is +4 − (−2) = +6 m/s. Divide by 3 s."
    ],
    [
      "From rest, a cart accelerates at +3 m/s² for 4 s. What is its displacement?",
      ["+6 m", "+12 m", "+24 m", "+48 m"],
      2,
      "With v₀ = 0, Δx = ½(3)(4²) = 24 m."
    ],
    [
      "What is a ball’s acceleration at the top of a straight-up throw, with air resistance ignored?",
      [
        "Zero",
        "9.8 m/s² upward",
        "9.8 m/s² downward",
        "It depends on the launch speed"
      ],
      2,
      "The velocity is momentarily zero, but gravity still accelerates the ball downward."
    ],
    [
      "If a(t) = 4t in SI units and v(0) = 1 m/s, what is v(2 s)?",
      ["5 m/s", "8 m/s", "9 m/s", "17 m/s"],
      2,
      "Integrating 4t gives 2t². Add initial velocity: 1 + 2(2²) = 9 m/s."
    ]
  ],
  [
    // Chapter 4

    [
      "Find displacement from (1, 2, 3) m to (4, 2, 1) m.",
      ["(3, 0, −2) m", "(5, 4, 4) m", "(−3, 0, 2) m", "(3, 0, 2) m"],
      0,
      "Subtract the initial coordinate from the final coordinate on each axis."
    ],
    [
      "Velocity changes from (2, 0) to (2, 6) m/s over 3 s. What is average acceleration?",
      ["(2, 2) m/s²", "(0, 2) m/s²", "(0, 6) m/s²", "(2, 0) m/s²"],
      1,
      "Subtract velocities to get (0, 6) m/s, then divide both components by 3 s."
    ],
    [
      "A ball is launched at an angle above horizontal. At the peak, which velocity component must be zero?",
      ["Horizontal", "Vertical", "Both", "Neither"],
      1,
      "The vertical component changes sign at the peak. With no drag, the horizontal component stays constant."
    ],
    [
      "A cart circles at 4 m/s on a path of radius 2 m. Find its centripetal acceleration.",
      ["2 m/s²", "4 m/s²", "8 m/s²", "16 m/s²"],
      2,
      "Use v²/r = 4²/2 = 8 m/s², directed inward."
    ],
    [
      "A passenger walks 2 m/s west relative to a train traveling 12 m/s east. What is the passenger’s ground velocity?",
      ["14 m/s east", "10 m/s east", "10 m/s west", "2 m/s west"],
      1,
      "Taking east as positive gives −2 + 12 = +10 m/s."
    ]
  ]
];

const quizzesByChapter = [
  [
    // Chapter 1

    [
      "About how many orders of magnitude separate 10⁻³ m and 10⁵ m?",
      ["2", "5", "8", "15"],
      2,
      "Their ratio is 10⁵ ÷ 10⁻³ = 10⁸."
    ],
    [
      "What does the prefix nano mean?",
      ["10⁻⁹", "10⁻⁶", "10⁻³", "10⁹"],
      0,
      "Nano denotes one billionth of the underlying unit."
    ],
    [
      "Convert 2 m² to cm².",
      ["200 cm²", "2,000 cm²", "20,000 cm²", "200,000 cm²"],
      2,
      "Since 1 m = 100 cm, 1 m² = 100² cm²."
    ],
    [
      "Which expression has dimensions of length if v is speed, a is acceleration, and t is time?",
      ["v/t", "at", "v²/a", "a/v"],
      2,
      "(L²/T²)/(L/T²) simplifies to L."
    ],
    [
      "A hall has about 30 rows with 20 seats per row. Which estimate is best?",
      ["50 seats", "60 seats", "600 seats", "6,000 seats"],
      2,
      "Rows × seats per row gives about 30 × 20 = 600 seats."
    ],
    [
      "What is 12.3 m + 0.46 m with appropriate rounding?",
      ["12.76 m", "12.7 m", "12.8 m", "13 m"],
      2,
      "The unrounded sum is 12.76 m. The least precise input ends at tenths, so report 12.8 m."
    ],
    [
      "A calculation says a person walks 1 km in 5 s. Which check is most useful?",
      [
        "Is the implied walking speed plausible?",
        "Are there at least four significant figures?",
        "Can both inputs be negative?",
        "Can the answer be written without units?"
      ],
      0,
      "The implied speed is 200 m/s, far beyond ordinary walking speed."
    ]
  ],
  [
    // Chapter 2

    [
      "What is the magnitude of a 6 m east displacement followed by 6 m west?",
      ["0 m", "6 m", "12 m", "36 m"],
      0,
      "Equal and opposite displacements sum to the zero vector."
    ],
    [
      "What is the magnitude of the vector (2, −3, 6)?",
      ["5", "7", "11", "49"],
      1,
      "√(2² + (−3)² + 6²) = √49 = 7."
    ],
    [
      "Find −2(1, −4, 0).",
      ["(−2, −8, 0)", "(2, −8, 0)", "(−2, 8, 0)", "(−1, 2, 0)"],
      2,
      "Multiply each signed component by −2."
    ],
    [
      "What is ĵ × î in a right-handed coordinate system?",
      ["k̂", "−k̂", "ĵ", "0"],
      1,
      "î × ĵ = k̂, and reversing the order reverses the result."
    ]
  ],
  [
    // Chapter 3

    [
      "A cart goes from x = 6 m to x = −2 m in 4 s. What is its average velocity?",
      ["+2 m/s", "−2 m/s", "−1 m/s", "+1 m/s"],
      1,
      "Use (−2 − 6)/4 = −2 m/s."
    ],
    [
      "At a point where the position–time graph slopes down at −5 m/s, what is the speed?",
      ["−5 m/s", "0 m/s", "2.5 m/s", "5 m/s"],
      3,
      "The slope is signed velocity. Speed is its magnitude."
    ],
    [
      "An object has v = −4 m/s and a = −2 m/s². What is it doing?",
      [
        "Moving right and speeding up",
        "Moving left and slowing down",
        "Moving left and speeding up",
        "Moving left at constant speed"
      ],
      2,
      "Both signs are negative. The object moves left and its velocity becomes more negative."
    ],
    [
      "A bicycle moving at +8 m/s brakes at −2 m/s². How far does it travel before stopping?",
      ["4 m", "8 m", "16 m", "32 m"],
      2,
      "Set v = 0 in v² = v₀² + 2aΔx. Then Δx = −64/(−4) = 16 m."
    ],
    [
      "A ball is thrown straight up at 19.6 m/s. How long until it reaches its highest point?",
      ["1.0 s", "2.0 s", "4.0 s", "9.8 s"],
      1,
      "At the top v = 0, so 0 = 19.6 − 9.8t and t = 2.0 s."
    ],
    [
      "A cart moves at −3 m/s for 2 s and +2 m/s for 4 s. What is its displacement?",
      ["−14 m", "−2 m", "+2 m", "+14 m"],
      2,
      "Add the signed velocity–time areas: (−3)(2) + (2)(4) = +2 m."
    ]
  ],
  [
    // Chapter 4

    [
      "If r(t) = (2t², 3t, 0) in SI units, what is v at 1 s?",
      ["(2, 3, 0) m/s", "(4, 3, 0) m/s", "(4, 0, 0) m/s", "(4, 6, 0) m/s"],
      1,
      "Differentiate each component to get (4t, 3, 0)."
    ],
    [
      "At an instant, velocity is east and acceleration is north. What happens at that instant?",
      [
        "Speed increases",
        "Speed decreases",
        "Velocity changes direction with zero instantaneous change in speed",
        "Velocity is constant"
      ],
      2,
      "A perpendicular acceleration changes velocity’s direction. Its component along velocity is zero."
    ],
    [
      "A ball returns to its launch height. Its initial components are 8 m/s horizontal and 10 m/s upward. Use g = 10 m/s². What is its range?",
      ["8 m", "10 m", "16 m", "20 m"],
      2,
      "Time up is 10/10 = 1 s and total time is 2 s. Range is 8 × 2 = 16 m."
    ],
    [
      "A car slows down as it rounds a circular bend. Which accelerations does it have?",
      [
        "Only inward",
        "Only tangent and forward",
        "Inward and tangent backward",
        "Outward and tangent backward"
      ],
      2,
      "The inward component turns the car. The backward tangential component reduces its speed."
    ],
    [
      "A plane flies 60 m/s north relative to air. Wind moves 25 m/s east relative to ground. What is its ground speed?",
      ["35 m/s", "60 m/s", "65 m/s", "85 m/s"],
      2,
      "The ground components are perpendicular, so the speed is √(60² + 25²) = 65 m/s."
    ]
  ]
];
