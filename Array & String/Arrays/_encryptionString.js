//Encrypt a given string by removing spaces and arranging characters in a grid with rows and columns based on its length. Read column-wise and return the encoded message.
//"if man was meant to stay on the ground god would have given us roots"
//"imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau"
function encryption(s) {
  let column = Math.ceil(Math.sqrt(s.length));
  let output = "";

  for (let i = 0; i < column; i++) {
    for (let j = i; j < s.length; j += column) {
      output += s[j];
    }
    output += " ";
  }

  return output.trim();
}
