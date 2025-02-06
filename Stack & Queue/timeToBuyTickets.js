function timeToBuyTickets(tickets, k) {
  let queue = [];
  let time = 0;
  for (let i = 0; i < tickets.length; i++) {
    queue.push(i);
  }
  while (tickets[k] > 0) {
    let curr = queue.shift();
    tickets[curr]--;
    time++;
    if (tickets[curr] > 0) {
      queue.push(curr);
    }
    if (tickets[k] === 0) {
      break;
    }
  }
  return time;
}
