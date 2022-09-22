const data = require('../data/addresses.json');

class Repo {
  constructor() {
    this.addresses = data.map((address, index) => { return {id: index, address: address}; })
  }

  searchStreet(lineOne, lineTwo) {
    return this.addresses.filter(({ address }) => {
      return address.line1.includes(lineOne) || address.line2?.includes(lineTwo)
    });
  }

  searchState(state){
    return this.addresses.filter(({ address }) => address.state.includes(state));
  }

  searchCity(city){
    return this.addresses.filter(({ address }) => address.city.includes(city));
  }

  searchZip(zip){
    return this.addresses.filter(({ address }) => address.zip.includes(zip));
  }

  get(index){
    return this.addresses[index];
  }

  add(address){
    const nextId = this.addresses.length;
    this.addresses.push({id: nextId, address: address});

    return nextId;
  }

  update(index, address){
    Object.assign(this.addresses[index].address, address);// {...this.addresses[index], ...address};

    return this.addresses[index];
  }

  delete(index){
    this.addresses[index] = undefined;
  }
}


const singleton = new Repo();
module.exports = singleton;
