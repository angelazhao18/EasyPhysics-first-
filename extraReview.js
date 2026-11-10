// TODO: separate lessons, practice, flashcards, & concepts into their own arrays (maybe?)

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