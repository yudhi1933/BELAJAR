function play(pilihan) {
  document.getElementById(pilihan).classList.remove("hidden");
  let setelahDiClick = document.querySelectorAll(".btn");
  setelahDiClick.forEach((button) => {
    button.disabled = true;
  });

  const rock = document.getElementById("rock2");
  const scissor = document.getElementById("scissor2");
  const paper = document.getElementById("paper2");

  const pilihanKomputer = [];
  pilihanKomputer.push(rock.id);
  pilihanKomputer.push(scissor.id);
  pilihanKomputer.push(paper.id);

  const random = Math.floor(Math.random() * pilihanKomputer.length);
  const komputerPilihan = pilihanKomputer[random];
  document.getElementById(komputerPilihan).classList.remove("hidden");

  let result = document.getElementById("result");
  result.innerHtml = "";

  if ((pilihan === "rock" && komputerPilihan === rock2.id) || (pilihan === "scissor" && komputerPilihan === scissor2.id) || (pilihan === "paper" && komputerPilihan === paper2.id)) {
    result.innerHTML = "You Win!";
  } else {
    result.innerHTML = "You Lose!!!!!!!";
  }
}
