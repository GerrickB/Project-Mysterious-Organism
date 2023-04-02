// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)]; 
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arrDna) => {
  return {
    specimenNum: num,
    dna: arrDna,
    mutate() {
      let randIndex = Math.floor(Math.random() * this.dna.length);
      console.log(randIndex);
      let randBase = this.dna[randIndex];
      console.log(`base to changed: ${randBase}`);
      let newBase = randBase;
      while (newBase === randBase) {
        console.log(`${newBase}: can't use this base again`);
        newBase = returnRandBase();
        
      }
      console.log(`${newBase} is the new base`);
      this.dna[randIndex] = newBase;
      return this.dna;
    }
  }
};

const randOrganism = pAequorFactory(1, mockUpStrand());
console.log(randOrganism.dna);
console.log(randOrganism.mutate());

