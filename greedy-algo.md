# greedy algorithm

> A greedy algorithm is a problem-solving technique that builds up a solution step by step by making a sequence of choices. At each step, the best option available at the moment (local optimum) is selected with the hope of finding the global optimum.<br>

Suppose a student has multiple career options. Based on criteria like minimum cost, maximum profit, and minimum risk, the student selects the best feasible option at each stage.

- It works in a top-down approach.
- the greedy algorithm doesn't always produce the optimal solution.
- Typically used for problems requiring either maximum or minimum results, like finding the shortest path, maximizing profit, or minimizing cost.
- Any greedy algorithm consists of a sequence of choices/ decisions,The choice made at any point cannot be altered later

```
Algorithm greedy(a,n){
for i=1 to n do{
x=select(a)
if Feasible(x) then
  solution=solution+x;
}
}
```

### job sequencing problem

in a bag we have max capacity=20 kg we want max profit?
also known as the job sequencing problem with deadlines, aims to maximize the profit of scheduled tasks within given constraints such as time or capacity.

        obj1   obj2    obj3

profit 25 24 15
weight 18 15 10

1. greedy about profit
   obj1 so out of 20 2(20-18)capacity weight is empty profit 25
   second next profit is obj2 so we have to fill 2 portion only so profit 25+2/15\*24=28.2
2. greedy about weight
   min weight is obj3 so we put obj3 so profit 15
   next obj2 10 portion we have to fill 15+10/15\*24==31
3. greedy about both 31.5

```
function fractionalKnapsack(objects, capacity) {
  // Sort objects by profit/weight ratio in descending order
  objects.sort((a, b) => (b.profit / b.weight) - (a.profit / a.weight));

  let totalProfit = 0;

  for (let i = 0; i < objects.length; i++) {
    if (capacity <= 0) break; // Stop if the bag is full

    const { profit, weight } = objects[i];
    if (weight <= capacity) {
      // Add the entire object
      capacity -= weight;
      totalProfit += profit;
    } else {
      // Add a fraction of the object
      totalProfit += profit * (capacity / weight);
      capacity = 0;
    }
  }

  return totalProfit;
}
```
